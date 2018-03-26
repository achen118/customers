import React from 'react';
import CustomerTable from "./CustomerTable";
import 'whatwg-fetch';
import queryString from 'query-string';

class CustomerSearch extends React.Component {
  constructor(props) {
    super(props);
    var initialSearchQuery = '';
    var loading = null;

    if (typeof(this.props.location) !== 'undefined' && typeof(this.props.location.search) !== 'undefined' && this.props.location.search !== ""){
      var parsedHash = queryString.parse(this.props.location.search);
      initialSearchQuery = parsedHash.query;
      loading = true;
    }

    this.state = {
      searchQuery: initialSearchQuery,
      customers: [],
      loading: loading
    }
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    if (this.state.searchQuery == event.target.value){
      //query didnt change
      return false;
    }

    this.props.history.replace('/customers?query='+event.target.value);

    if (event.target.value === ''){
      this.setState({
        loading: null,
        searchQuery: event.target.value
      });
      return false;
    }

    this.fetchCustomers(event.target.value);
    this.setState({
      searchQuery: event.target.value,
      loading: true
    });
  }

  componentWillMount(){
    if(this.state.searchQuery !== ""){
      this.fetchCustomers(this.state.searchQuery);
    }
  }

  fetchCustomers(query){
    fetch('/customers.json?query='+query).then(response => { return response.json(); }).catch((error) => {
      console.log("Error occured getting results")
    }).then((data) => {
      // Need to ensure slower requests dont override the results we want
      if (this.state.searchQuery === data["query"]){
        this.setState(
          { customers: data["customers"], loading: false,  }
        )
      }
    }).catch((error) => {
      console.log("Error occured parsing results")
    });
  }

  render() {
    var resultsContent = "Enter a name to get started";
    if (this.state.loading === true){
      resultsContent = "Loading Results..."
    } else if (this.state.loading === false) {
      resultsContent = (<CustomerTable customers={this.state.customers} />)
    }
    return (
      <div>
        <div className="customer-search-input">
          <label>
            Search Customers by name:
            <input type="text" value={this.state.searchQuery} onChange={this.inputChange}/>
          </label>
        </div>
        {resultsContent}
      </div>
    );
  }
}

export default CustomerSearch;
