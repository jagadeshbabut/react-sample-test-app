import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    signup = (event) => {
        event.preventDefault();
        let user_info = this.state
        delete user_info['repassword']
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
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={(e) => this.onChange(e)}
                        required
                        autoFocus/>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        onChange={(e) => this.onChange(e)}
                        required/>
                    <label htmlFor="inputPassword" className="sr-only">Choose Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        className="form-control"
                        placeholder="Choose a Password"
                        onChange={(e) => this.onChange(e)}
                        required/>
                    <label htmlFor="reInputPassword" className="sr-only">Re-confirm Password</label>
                    <input
                        type="password"
                        id="reInputPassword"
                        name="repassword"
                        className="form-control"
                        placeholder="Re-confirm Password"
                        onChange={(e) => this.onChange(e)}
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