import React from 'react';
import App from './app';
import {shallow} from 'enzyme';

describe('App Component Testing', () => {
  it('App Renders without crashing', () => {
    shallow(<App/>);
  });

  it('App component has not changed', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot()
  });

});