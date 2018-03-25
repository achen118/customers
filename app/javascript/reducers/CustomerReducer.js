const CustomerReducer = {
  initialState: {
    searchQuery: "",
    customers: [],
    allCustomers: []
  },
  getFilteredCustomers: function(query, customers){
    if (query === ''){
      return customers;
    }
    var lowerCaseQuery = query.toLowerCase();
    var filteredCustomers = customers.filter(function(customer){
      var fullName = customer.firstName + ' ' + customer.lastName;
      // Decided to make this case insensitive for UX reasons
      //  Assuming its probably a little easier to users if they dont need to
      // worry about case
      return fullName.toLowerCase().indexOf(lowerCaseQuery) !== -1;
    });
    return filteredCustomers;
  },
  reducer: function(state, action){
    state = state || CustomerReducer.initialState
    var newSearchQuery = state.searchQuery;
    var filteredCustomers = state.customers;
    var allCustomers = state.allCustomers;
    if (action.type == "UPDATE_SEARCH_PARAMETER"){
      newSearchQuery = action.newValue;
      filteredCustomers = CustomerReducer.getFilteredCustomers(newSearchQuery, allCustomers);
      if (typeof(window) !== 'undefined' && typeof(window.history) !== 'undefined'){
        window.history.replaceState(null, null, "/customers?query="+newSearchQuery);
      }
    } else if (action.type == "UPDATE_CUSTOMERS"){
      allCustomers = action.newCustomers;
      filteredCustomers = CustomerReducer.getFilteredCustomers(newSearchQuery, allCustomers);
    }

    return {
      searchQuery: newSearchQuery,
      customers: filteredCustomers,
      allCustomers: allCustomers
    }
  }
}


export default CustomerReducer;
