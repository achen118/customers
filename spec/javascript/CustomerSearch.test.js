import React from 'react';
import { mount, configure } from 'enzyme';
import { JSDOM } from 'jsdom';

import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import CustomerSearch from '../../app/javascript/components/CustomerSearch';

test('Empty initial Query', () => {
  const wrapper = mount(
    <CustomerSearch />,
  );

  expect(wrapper.state('searchQuery')).toBe('');
  expect(wrapper.state('customers')).toEqual([]);
  expect(wrapper.state('loading')).toBe(null);
});

test('Passed initial Query', () => {
  var locationProp = { search: 'query=john'};
  var historyProp = {replace: sinon.spy() };

  const wrapper = mount(
    <CustomerSearch location={locationProp} history={historyProp}/>,
  );

  expect(wrapper.state('searchQuery')).toBe('john');
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
