import React from 'react';
import CustomerRow from "./CustomerRow";

export default class CustomerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        {firstName: 'Jordy', lastName: 'Nelson'},
        {firstName: 'Randall', lastName: 'Cobb'}
      ]
    }
  }

  render() {
    var customerRows = this.state.customers.map(function(customer, index){
      return (
        <CustomerRow
          key={index}
          firstName={customer.firstName}
          lastName={customer.lastName} />
      );
    });

    return (
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {customerRows}
        </tbody>
      </table>
    );
  }
}
