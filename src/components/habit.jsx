import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() {           //라이프사이클. ui상에 보여질 때
        console.log(`habit: ${this.props.habit.name} mounted`);
      }
    
    componentWillUnmount() {          //라이프사이클. ui상에서 지워졌을 때
        console.log(`habit: ${this.props.habit.name} will unmount`);
      }

    handleIncrement = (event) => {
        // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야함.
        // this.state.count += 1; 이런식으로 바로(|| 부분적으로) 업데이트 해주면 안됨. setstate로 적체적인 업데이트 해줘야함.
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = (event) => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = (event) => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        const { name, count } = this.props.habit;
        return  (
        <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button 
                className="habit-button habit-delete"
                onClick={this.handleDelete}
            >
                <i className="fas fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;