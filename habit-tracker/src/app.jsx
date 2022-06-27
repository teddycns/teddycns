import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
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
    // const habits = [...this.state.habits]; // ... : spread operator : 각각의 데이터를 복사
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({ habits: habits }); // key:value = habits(state에 정의된 habits 배열명) : habits (새로 정의한 배열명)
    // =  this.setState({habits}); - key와 value의 이름이 같을 경우 하나로 생략 가능


    // object는 불변의 object로 놔두고 변경 필요 시 새로운 object를 생성하는 것이 좋음(아래 코드 참조). 위 코드는 기능 구현은 가능하지만 좋은 코드는 아님
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; // map으로 기존 state.habits을 돌면서 선택한 id와 같다면 새로운 habit에 object를 만드는데 count를 1만큼 증가시켜서 만들고
      } else {
        return item; // id가 다르다면 업데이트 할 필요가 없기 때문에 기존의 똑같은 item 사용
      }
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    //console.log(`handleDecrement ${habit.name}`);

    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    // this.setState({ habits: habits });

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    //console.log(`handleDelete ${habit.name}`);

    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }]
    // const habits = [...this.state.habits, {id: Date.now(), name, count: 0}] : 위와 동일 - name:name 둘 다 동일할 경우 하나만 써서 생략가능
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = this.state.habits.map(habit => {
    //   habit.count = 0;
    //   return habit;
    // });
    // this.setState({ habits });

    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 }
      } //else {
        return habit;
      //}
    });
    this.setState({ habits });
  };

  render() {
    console.log('app');
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;