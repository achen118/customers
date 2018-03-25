import React from 'react';
import CustomerTable from "./CustomerTable";

class CustomerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      customers: []
    }
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
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
      // TODO: We should add case insensitive searching
      return fullName.indexOf(currentSearchQuery) !== -1;
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
