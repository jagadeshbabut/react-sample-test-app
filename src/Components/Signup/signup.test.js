import React from 'react';
import {shallow, mount} from 'enzyme';
import Signup from './signup';
import {MemoryRouter} from 'react-router-dom';

describe('Signup Component', () => {
    it('Renders without crashing', () => {
        shallow(<Signup/>)
    });

    it('Signup component has not changed', () => {
        const wrapper = shallow(<Signup/>);
        expect(wrapper).toMatchSnapshot()
    });

    it('Check Signin link is working', () => {
        const REDIRECTED = '/signin'
        const wrapper = mount(
            <MemoryRouter initialEntries={[REDIRECTED]}>
                <Signup/>
            </MemoryRouter>
        );
        expect(wrapper.find('Link')).toBeTruthy();
        wrapper
            .find('Link')
            .simulate('click');
        expect(wrapper.find('Link').prop('to')).toEqual(REDIRECTED)
    });

});