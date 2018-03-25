import React from 'react';
import { connect } from 'react-redux';
import CustomerTable from "./CustomerTable";

class CustomerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    this.props.dispatch({
      type: "UPDATE_SEARCH_PARAMETER",
      newValue: event.target.value
    })
  }

  componentWillMount() {
    fetch('/customers.json')
    .then(response => { return response.json(); })
    .then(data => this.props.dispatch({
      type: "UPDATE_CUSTOMERS",
      newCustomers: data
    }));
  }

  render() {
    return (
      <div>
        <div className="customer-search-input">
          <label>
            Search Customers by name:
            <input type="text" value={this.props.searchQuery} onChange={this.inputChange}/>
          </label>
        </div>
        <CustomerTable customers={this.props.customers} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.searchQuery,
  customers: state.customers
});

export default connect(mapStateToProps)(CustomerSearch);
