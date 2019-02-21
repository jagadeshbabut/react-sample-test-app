import React, {Component} from 'react';
import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './../signup/signup';
import Signin from './../signin/signin';
import Dashboard from './../dashboard/dashboard';
import Todo from './../todo/todo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/todos" component={Todo}/>
        </div>
      </Router>
    );
  }
}

export default App;
