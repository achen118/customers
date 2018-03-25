import React from 'react';
import ReactDOM from 'react-dom';
import CustomerSearch from '../components/CustomerSearch';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CustomerReducer from '../reducers/CustomerReducer';

const store = createStore(CustomerReducer.reducer);
document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(
    <Provider store={store}>
      <CustomerSearch />
    </Provider>,
    document.getElementById('customer-search-table')
  );
})
