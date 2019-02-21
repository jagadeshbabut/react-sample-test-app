import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from './dashboard';

describe('Dashboard Component', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard/>)
    });

    it('Dashboard component has not changed', () => {
        const wrapper = shallow(<Dashboard/>);
        expect(wrapper).toMatchSnapshot()
    });

    it('Check Goto Todos link is working', () => {
        const wrapper = shallow(<Dashboard/>);
        // expect(wrapper).
    });

});