import React from 'react';
import {shallow, mount} from 'enzyme';
import Signin from './signin';
import {MemoryRouter} from 'react-router-dom';

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

    describe("Signin shallow render", () => {
        let wrapper
        beforeEach(() => {
            wrapper = mount(
                <MemoryRouter><Signin history={[]}/></MemoryRouter>
            );
        })

        it('render the signin form', () => {
            expect(wrapper.length).toEqual(1)
        });

        it('<form> element should have an <img> element with logo', () => {
            expect(wrapper.find('form').childAt(0).type()).toBe('img');
        });

        it('<form> element should have an <h1> element with text Please sign in', () => {

            let formHeading = wrapper
                .find('form')
                .childAt(1)

            expect(formHeading.type()).toBe('h1');
            expect(formHeading.text()).toBe('Please sign in')
        });

        it('<form> element should have an <label> for Email address', () => {
            let emailLabel = wrapper
                .find('form')
                .childAt(2)

            expect(emailLabel.type()).toBe('label');
            expect(emailLabel.text()).toBe('Email address');
        });

        it('<form> element should have an <input> for email', () => {
            expect(wrapper.find('#inputEmail').length).toBe(1);
            expect(wrapper.find('#inputEmail').props().value).toEqual('');
            wrapper
                .find('#inputEmail')
                .simulate("change", {
                    target: {
                        name: "email",
                        value: "hello"
                    }
                });
            expect(wrapper.find('#inputEmail').props().value).toEqual('hello');
        });

        it('<form> element should have an <label> for password', () => {
            let passwordLabel = wrapper
                .find('form')
                .childAt(4)

            expect(passwordLabel.type()).toBe('label');
            expect(passwordLabel.text()).toBe('Password');
        });

        it('<form> element should have an <input> for password', () => {
            let passwordInput = wrapper
                .find('form')
                .childAt(5)

            expect(passwordInput.type()).toBe('input');
            expect(wrapper.find('#inputPassword').length).toBe(1);
            expect(passwordInput.text()).toBe('')
        });

        it('<form> element should have a remember me checkbox', () => {
            let checkboxLabel = wrapper
                .find('form')
                .childAt(6)
                .childAt(0)

            expect(checkboxLabel.type()).toBe('label')
            expect(checkboxLabel.text()).toBe('Remember me')

            let checkbox = checkboxLabel.childAt(0)

            expect(checkbox.type()).toBe('input')

            // this get(0) gets us an object
            expect(checkbox.get(0).props.type).toBe('checkbox')
            // checkbox = wrapper.find({ type: 'checkbox' });
            // expect(checkbox.props.checked).toEqual(false);
        })

        it('signin function is called when form is submitted', () => {
            const EMAIL = 'hello@example.com'
            const PASSWORD = 'SomePassword'
            sessionStorage.setItem('user_info', JSON.stringify({email: EMAIL, password: PASSWORD}))
            const preventDefault = jest.fn()
            expect(wrapper.find('#inputEmail').length).toBe(1);
            expect(wrapper.find('#inputPassword').length).toBe(1);
            expect(wrapper.find('#inputEmail').props().value).toEqual('');
            expect(wrapper.find('#inputPassword').props().value).toEqual('');
            wrapper
                .find('#inputEmail')
                .simulate("change", {
                    target: {
                        name: "email",
                        value: EMAIL
                    }
                });
            wrapper
                .find('#inputPassword')
                .simulate("change", {
                    target: {
                        name: "password",
                        value: PASSWORD
                    }
                });
            wrapper
                .find('form')
                .at(0)
                .simulate('submit', {preventDefault});
            expect(preventDefault).toHaveBeenCalled();
        });
        it('alert box opened when wrong credentials are submitted', () => {
            const EMAIL = 'hello@example.com'
            const PASSWORD = 'SomePassword'
            sessionStorage.setItem('user_info', JSON.stringify({email: EMAIL, password: PASSWORD}))
            const preventDefault = jest.fn()
            expect(wrapper.find('#inputEmail').length).toBe(1);
            expect(wrapper.find('#inputPassword').length).toBe(1);
            expect(wrapper.find('#inputEmail').props().value).toEqual('');
            expect(wrapper.find('#inputPassword').props().value).toEqual('');
            wrapper
                .find('#inputEmail')
                .simulate("change", {
                    target: {
                        name: "email",
                        value: EMAIL
                    }
                });
            wrapper
                .find('#inputPassword')
                .simulate("change", {
                    target: {
                        name: "password",
                        value: "PASSWORD"
                    }
                });
            wrapper
                .find('form')
                .at(0)
                .simulate('submit', {preventDefault});
            expect(preventDefault).toHaveBeenCalled();
        });
    });
});
