import React from 'react';
import App from './app';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<App/>);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toContainReact('BrowserRouter');
});