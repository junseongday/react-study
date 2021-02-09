import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handelIncrease = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <>
        <div>{this.state.counter}</div>
        <button onClick={this.handelIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </>
    );
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       throw new Error('Unhandled error');
//   }
// }
// function Counter() {
//   const [number, dispatch] = useReducer(reducer, 0);
//   const onIncrease = () => {
//     console.log('increase');
//     dispatch({ type: 'INCREMENT' });
//   };
//   const onDecrease = () => {
//     console.log('decrease');
//     dispatch({ type: 'DECREMENT' });
//   };
//   return (
//     <>
//       <div>{number}</div>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </>
//   );
// }
export default Counter;
