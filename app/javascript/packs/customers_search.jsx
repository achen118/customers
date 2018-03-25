import React from 'react';
import ReactDOM from 'react-dom';
import CustomerSearch from '../components/CustomerSearch';


document.addEventListener("DOMContentLoaded", e => {
  var searchQueryNode = document.getElementById('search-query');
  var searchQuery = searchQueryNode.getAttribute('data');

  ReactDOM.render(
    <CustomerSearch searchQuery={searchQuery} />,
    document.getElementById('customer-search-table').appendChild(document.createElement('div'))
  );
})
