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
  const component = renderer.create(
    <CustomerSearch searchQuery="john"/>,
  );
  var testInstance = component.root;

  expect(testInstance.instance.state.searchQuery).toBe("john");
  expect(testInstance.instance.state.customers).toEqual([]);
  expect(testInstance.instance.state.loading).toBe(true);
});

test('Update Query', () => {
  const inputChange = sinon.spy();
  const myDom = new JSDOM('<!DOCTYPE html><p>Hello world</p>', { url: "https://example.org/" });
  const { window } = myDom;
  global.window = window;
  global.document = window.document;
  // jsdom.changeURL(window, 'https://localhost:9001');
  const wrapper = mount(<CustomerSearch />);
  const input = wrapper.find('input');
  console.log("Before")
  console.log(wrapper.state());

  input.simulate('change', { target: { value: 'A' } });
  console.log("After")
  console.log(wrapper.state());
  // expect(input.get(0).value).to.equal('Hello');
  console.log(inputChange.callCount);
});
