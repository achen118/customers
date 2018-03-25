const CustomerReducer = {
  initialState: {
    searchQuery: "",
    customers: []
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
    console.log("reducer called with action type: " + action.type)
    state = state || CustomerReducer.initialState
    var newSearchQuery = state.searchQuery;
    var newCustomers = state.customers;
    if (action.type == "UPDATE_SEARCH_PARAMETER"){
      newSearchQuery = action.newValue;
      newCustomers = CustomerReducer.getFilteredCustomers(newSearchQuery, newCustomers);
    } else if (action.type == "UPDATE_CUSTOMERS"){
      newCustomers = action.newCustomers;
      console.log("Updating customers based on the query: " + state.searchQuery)
      newCustomers = CustomerReducer.getFilteredCustomers(newSearchQuery, newCustomers);
    }
    console.log("returning new customers:")
    console.log(newCustomers)
    return {
      searchQuery: newSearchQuery,
      customers: newCustomers
    }
  }
}


export default CustomerReducer;
