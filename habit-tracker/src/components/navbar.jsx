import React, { Component } from 'react';

class navbar extends Component {
    render() {
        console.log('navbar');
        return (
            <nav className='navbar'>
                <i className="fa-solid fa-leaf nav-logo"></i> 
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>

        );
    }
}

export default navbar;