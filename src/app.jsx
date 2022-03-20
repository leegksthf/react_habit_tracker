import React, { Component } from 'react';
import './app.css'
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {       // 기능들에서 새로운 컴포넌트를 만들기때문에 purecomponent로 해도 계속 업데이트되기 때문에 필요 없음
  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 }
    ],
};

  handleIncrement = habit => {
    // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야함.
    // this.state.count += 1; 이런식으로 바로(|| 부분적으로) 업데이트 해주면 안됨. setstate로 적체적인 업데이트 해줘야함.
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } 
      return item;
    })
    this.setState({ habits })       // == this.setState({ habits(기존 state의 habits): habits(로컬변수) })
  };
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    })
    this.setState({ habits });
  }
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id); // 클릭한 아이템만 빼고 배열 만들어서 setState
    // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환.
    this.setState({ habits });
  }

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({ habits });
}

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0) {           // 0일 경우 업데이트 해주는 것은 비효율적이기 때문
        return { ...habit, count: 0 };
      }
      return habit;
    });
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
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;