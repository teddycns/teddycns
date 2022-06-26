import React, { Component } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [ // 배열일 경우 key 값을 지정해줘야 함. 고유의 값으로! (index는 key 값이 될 수 없음)
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => { //callback 함수
    //console.log(`handleIncrement ${habit.name}`);

    // state를 직접 수정 (이 방법 사용X)
    // habit.count++;
    // this.setState(this.state);

    // react에서는 state를 직접 수정하면 안됌. 따라서 위 주석과 같이 코딩하지 않고 아래와 같이 새로운 배열을 만들어 수정
    const habits = [...this.state.habits]; // ... : spread operator : 각각의 데이터를 복사
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits }); // key:value = habits(state에 정의된 habits 배열명) : habits (새로 정의한 배열명)
    // =  this.setState({habits}); - key와 value의 이름이 같을 경우 하나로 생략 가능
  };

  handleDecrement = (habit) => {
    //console.log(`handleDecrement ${habit.name}`);

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    //console.log(`handleDelete ${habit.name}`);

    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  handleRest = () => {
    const habits = [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ];
    this.setState({ habits });

  };

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} />
        <button className='habit-btn' onClick={this.handleRest}>Reset All</button>
      </>
    );
  }
}

export default App;