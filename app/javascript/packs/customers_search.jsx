import React from 'react';
import ReactDOM from 'react-dom';
import CustomerSearch from '../components/CustomerSearch';

import { BrowserRouter,  Route, Router } from 'react-router-dom'

document.addEventListener("DOMContentLoaded", e => {

  ReactDOM.render(
    <BrowserRouter>
      <Route path="/" render={props => <CustomerSearch {...props} />}/>
    </BrowserRouter>,
    document.getElementById('customer-search-table').appendChild(document.createElement('div'))
  );
})
