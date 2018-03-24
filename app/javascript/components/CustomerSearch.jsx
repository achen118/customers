import React from 'react';
import CustomerTable from "./CustomerTable";

class CustomerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  getFilteredCustomers() {
    if (this.state.searchQuery === ''){
      return this.props.customers;
    }
    var currentSearchQuery = this.state.searchQuery;

    return this.props.customers.filter(function(customer){
      var fullName = customer.firstName + ' ' + customer.lastName;
      // TODO: We should add case insensitive searching
      return fullName.indexOf(currentSearchQuery) !== -1;
    });
  }

  render() {
    var filteredCustomers = this.getFilteredCustomers();

    return (
      <div>
        <input type="text" onChange={this.inputChange}/>
        <CustomerTable customers={filteredCustomers} />
      </div>
    );
  }
}

CustomerSearch.defaultProps = {
  customers: [
    {firstName: 'Jordy', lastName: 'Nelson'},
    {firstName: 'Randall', lastName: 'Cobb'},
    {firstName: 'Johnny', lastName: 'McNally'}
  ]
}

export default CustomerSearch;
