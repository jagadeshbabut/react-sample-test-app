import React from 'react';
import {shallow} from 'enzyme';
import Signup from './signup';

describe('Signup Component', () => {
    it('Renders without crashing', () => {
        shallow(<Signup/>)
    });

    it('Signup component has not changed', () => {
        const wrapper = shallow(<Signup/>);
        expect(wrapper).toMatchSnapshot()
    });

    it('Check Goto Todos link is working', () => {
        const wrapper = shallow(<Signup/>);
        // expect(wrapper).
    });

});