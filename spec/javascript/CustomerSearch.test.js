import React from 'react';
import renderer from 'react-test-renderer';
import CustomerSearch from '../../app/javascript/components/CustomerSearch';

test('Empty initial Query', () => {
  const component = renderer.create(
    <CustomerSearch />,
  );
  var testInstance = component.root;

  expect(testInstance.instance.state.searchQuery).toBe("");
  expect(testInstance.instance.state.customers).toEqual([]);
  expect(testInstance.instance.state.loading).toBe(null);
});

test('Passed initial Query', () => {
  const component = renderer.create(
    <CustomerSearch searchQuery="john"/>,
  );
  var testInstance = component.root;

  expect(testInstance.instance.state.searchQuery).toBe("john");
  expect(testInstance.instance.state.customers).toEqual([]);
  expect(testInstance.instance.state.loading).toBe(true);
});
