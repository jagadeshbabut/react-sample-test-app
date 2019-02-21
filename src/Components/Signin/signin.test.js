import React from 'react';
import {shallow} from 'enzyme';
import Signin from './signin';

describe('Signin Component', () => {
    it('Renders without crashing', () => {
        shallow(<Signin/>)
    });

    it('Signin component has not changed', () => {
        const wrapper = shallow(<Signin/>);
        expect(wrapper).toMatchSnapshot()
    });

    it('Check Goto Todos link is working', () => {
        const wrapper = shallow(<Signin/>);
        // expect(wrapper).
    });

});