import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.repassword = React.createRef();
    }

    signup(event) {
        event.preventDefault();
        let user_info = {
            name: this.name.current.value,
            email: this.email.current.value,
            password: this.password.current.value
        }
        // setter
        sessionStorage.setItem('user_info', JSON.stringify(user_info));
        this
            .props
            .history
            .push('/signin');
    }

    render() {
        return (
            <Fragment>
                <form className="form-signup" onSubmit={(e) => this.signup(e)}>
                    <img
                        className="mb-4"
                        src="//getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
                        alt=""
                        width="72"
                        height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        ref={this.name}
                        required
                        autoFocus/>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        ref={this.email}
                        required/>
                    <label htmlFor="inputPassword" className="sr-only">Choose Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Choose a Password"
                        ref={this.password}
                        required/>
                    <label htmlFor="reInputPassword" className="sr-only">Re-confirm Password</label>
                    <input
                        type="password"
                        id="reInputPassword"
                        className="form-control"
                        placeholder="Re-confirm Password"
                        ref={this.repassword}
                        required/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                </form>
                <hr/>
                <p>
                    <Link to="/signin">Login if already signed up!</Link>
                </p>
            </Fragment>
        )
    }
}

export default Signup;