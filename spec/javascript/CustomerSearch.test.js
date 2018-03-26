import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import { JSDOM } from 'jsdom';

import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
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
  var locationProp = { search: 'query=john'};
  var historyProp = {replace: sinon.spy() };

  const wrapper = mount(
    <CustomerSearch location={locationProp} history={historyProp}/>,
  );

  expect(wrapper.state('searchQuery')).toBe("john");
  expect(wrapper.state('customers')).toEqual([]);
  expect(wrapper.state('loading')).toBe(true);
  expect(historyProp.replace.callCount).toBe(0);
});

test('Update Query', () => {
  var locationProp = { search: 'query=john'};
  var historyProp = {replace: sinon.spy() };

  const wrapper = mount(<CustomerSearch location={locationProp} history={historyProp}/>);

  const input = wrapper.find('input');
  input.simulate('change', { target: { value: 'A' } });
  expect(historyProp.replace.callCount).toBe(1);
});
