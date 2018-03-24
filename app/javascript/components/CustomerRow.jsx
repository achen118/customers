import React from 'react';
import PropTypes from 'prop-types';

class CustomerRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
      </tr>
    );
  }
}

CustomerRow.defaultProps = {
  firstName: 'David',
  lastName: 'Ortiz'
}

CustomerRow.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default CustomerRow;
