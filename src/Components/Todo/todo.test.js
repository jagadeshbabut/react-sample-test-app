import React from 'react';
import {shallow} from 'enzyme';
import Todo from './todo';

describe('Todo Component', () => {
    it('Renders without crashing', () => {
        shallow(<Todo/>)
    });

    it('Todo component has not changed', () => {
        const wrapper = shallow(<Todo/>);
        expect(wrapper).toMatchSnapshot()
    });

    it('Check Goto Todos link is working', () => {
        const wrapper = shallow(<Todo/>);
        // expect(wrapper).
    });

});