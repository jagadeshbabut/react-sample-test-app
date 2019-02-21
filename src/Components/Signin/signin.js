import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }

    signin(event) {
        event.preventDefault();
        const user_info = JSON.parse(sessionStorage.getItem('user_info'));
        if (user_info.email === this.email.current.value && user_info.password === this.password.current.value) {
            this
                .props
                .history
                .push('/dashboard');
        }
    }

    render() {
        return (
            <Fragment>
                <form className="form-signin" onSubmit={(e) => this.signin(e)}>
                    <img
                        className="mb-4"
                        src="//getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
                        alt=""
                        width="72"
                        height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        ref={this.email}
                        required
                        autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        ref={this.password}
                        required/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/>
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
                <hr/>
                <p>
                    <Link to="/">Signup if new user!</Link>
                </p>
            </Fragment>
        )
    }
}

export default Signin;