import React from 'react';
import ReactDOM from 'react-dom';
import CustomerSearch from '../components/CustomerSearch';


document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<CustomerSearch />, document.body.appendChild(document.createElement('div')))
})
