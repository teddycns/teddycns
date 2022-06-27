import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    // handleDelete = (habit) => {
    //     this.props.onDelete(habit);
    // };

    handleAdd = (name) => {
        this.props.onAdd(name);
    };


    render() {
        console.log('habits');
        return (
            <div className='habits'> {/* fragement */}
                {/* <HabitAddForm onAdd={this.handleAdd}/> */}
                <HabitAddForm onAdd={this.props.onAdd} />
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit
                            key={habit.id} /* habit이라는 props에 habit(map의 item) 전달, 배열인 경우 prop key값 지정 */
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            // onDelete={this.handleDelete}
                            onDelete={(habit)=>this.props.onDelete(habit)}
                            onAdd={this.handleAdd}
                        />
                    ))}
                </ul>
                <button className='habits-reset' onClick={this.props.onReset}>Reset All</button>
            </div>

        );
    }
}

export default Habits;