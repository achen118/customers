import React from 'react';
import CustomerTable from "./CustomerTable";

class CustomerSearch extends React.Component {
  constructor(props) {
    super(props);
    var initialSearchQuery = "";
    if (typeof(window) !== 'undefined' && typeof(window.location) !== 'undefined' && typeof(window.location.hash) !== 'undefined'){
      initialSearchQuery = window.location.hash.replace(/#/, '');
    }
    this.state = {
      searchQuery: initialSearchQuery,
      customers: []
    }
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
    window.location.hash = '#' + event.target.value;
  }

  componentWillMount() {
    fetch('/customers.json')
    .then(response => { return response.json(); })
    .then(data => this.setState({ customers: data }));
  }

  getFilteredCustomers() {
    if (this.state.searchQuery === ''){
      return this.state.customers;
    }
    var currentSearchQuery = this.state.searchQuery;

    return this.state.customers.filter(function(customer){
      var fullName = customer.firstName + ' ' + customer.lastName;
      // Decided to make this case insensitive for UX reasons
      //  Assuming its probably a little easier to users if they dont need to
      // worry about case
      return fullName.toLowerCase().indexOf(currentSearchQuery.toLowerCase()) !== -1;
    });
  }

  render() {
    var filteredCustomers = this.getFilteredCustomers();

    return (
      <div>
        <div className="customer-search-input">
          <label>
            Search Customers by name:
            <input type="text" onChange={this.inputChange}/>
          </label>
        </div>
        <CustomerTable customers={filteredCustomers} />
      </div>
    );
  }
}

export default CustomerSearch;
