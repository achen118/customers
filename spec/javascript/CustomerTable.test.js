import React from 'react';
import renderer from 'react-test-renderer';
import CustomerTable from '../../app/javascript/components/CustomerTable';
import CustomerRow from '../../app/javascript/components/CustomerRow';

test('Render 3 customer rows', () => {
  var customers = [
    {firstName: 'Jordy', lastName: 'Nelson'},
    {firstName: 'Randall', lastName: 'Cobb'},
    {firstName: 'Johnny', lastName: 'McNally'}
  ]
  const component = renderer.create(
    <CustomerTable customers={customers} />,
  );
  var testInstance = component.root;
  var rows = testInstance.findAllByType(CustomerRow)
  expect(rows.length).toBe(3);
  for(var i = 0; i < rows.length; i++){
    var myRow = rows[i]
    expect(myRow.props.firstName).toBe(customers[i].firstName);
    expect(myRow.props.lastName).toBe(customers[i].lastName);
  }
});

test('Inital loading display', () => {
  var customers = [];
  const component = renderer.create(
    <CustomerTable customers={customers} />,
  );
  var testInstance = component.root;
  var rows = testInstance.findAllByType(CustomerRow)
  expect(rows.length).toBe(0);
});
