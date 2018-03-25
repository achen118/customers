import React from 'react';
import CustomerTable from "./CustomerTable";

class CustomerSearch extends React.Component {
  constructor(props) {
    super(props);

    var initialSearchQuery = "";
    if (this.props.searchQuery && this.props.searchQuery !== ""){
      initialSearchQuery = this.props.searchQuery;
    }
    this.state = {
      searchQuery: initialSearchQuery,
      customers: [],
      loading: null
    }
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    if (this.state.searchQuery == event.target.value){
      //query didnt change
      return false;
    }

    window.history.replaceState(null, null, "/customers?query="+event.target.value)
    this.fetchCustomers(event.target.value);
    this.setState({
      searchQuery: event.target.value,
      loading: true
    });
  }

  fetchCustomers(query){
    fetch('/customers.json?query='+query)
    .then(response => { return response.json(); })
    .then(data => this.setState(
      { customers: data, loading: false,  }
    ));
  }

  render() {
    var resultsContent = "Enter a query to get started";
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
