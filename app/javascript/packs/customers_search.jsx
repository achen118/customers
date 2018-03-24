import React from 'react';
import ReactDOM from 'react-dom';
import CustomerTable from '../components/CustomerTable';


document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<CustomerTable />, document.body.appendChild(document.createElement('div')))
})
