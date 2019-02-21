import React from 'react';
import {shallow, mount} from 'enzyme';
import Dashboard from './dashboard';
import {MemoryRouter} from 'react-router';

describe('Dashboard Component', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard/>)
    });

    it('Dashboard component has not changed', () => {
        const wrapper = shallow(<Dashboard/>);
        expect(wrapper).toMatchSnapshot()
    });

    it('Check Goto Todo link is working', () => {
        const REDIRECTED = '/todos'
        const wrapper = mount(
            <MemoryRouter initialEntries={[REDIRECTED]}>
                <Dashboard/>
            </MemoryRouter>
        );
        expect(wrapper.find('Link')).toBeTruthy();
        wrapper
            .find('Link')
            .simulate('click');
        expect(wrapper.find('Link').prop('to')).toEqual(REDIRECTED)
    });
});
