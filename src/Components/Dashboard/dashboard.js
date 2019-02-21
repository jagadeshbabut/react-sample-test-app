import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link to="/todos">Go to Todos!</Link>
                </header>
            </div>
        );
    }
}

export default Dashboard;
