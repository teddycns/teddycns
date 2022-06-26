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
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit
                            key={habit.id} /* habit이라는 props에 habit(map의 item) 전달, 배열인 경우 prop key값 지정 */
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={(habit) => {this.props.handleDelete(habit)}} />
                    ))}
                </ul>
            </>

        );
    }
}

export default Habits;