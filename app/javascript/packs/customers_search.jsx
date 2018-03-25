import React from 'react';
import ReactDOM from 'react-dom';
import CustomerSearch from '../components/CustomerSearch';


document.addEventListener("DOMContentLoaded", e => {
  var customerData = document.getElementById('customer_data');
  var customers = JSON.parse(customerData.getAttribute('data'));

  ReactDOM.render(
    <CustomerSearch customers={customers} />,
    document.getElementById('customer-search-table').appendChild(document.createElement('div'))
  );
})
