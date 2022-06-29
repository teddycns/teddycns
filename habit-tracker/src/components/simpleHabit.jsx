import React, { Component } from 'react';

class SimpleHabit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState(this.state.count + 1);
    }

    render() {
        return (
            <div>
                <li className='habit'>
                    <span className="habit-name">Reading</span> 
                    <span className="habit-count">{this.state.count}</span>
                    <button className="habit-button habit-increase" onClick={() => this.handleIncrement}>
                        <i className="fa-solid fa-square-plus"></i>
                    </button>
                </li>
            </div>
        );
    }
}

export default SimpleHabit;