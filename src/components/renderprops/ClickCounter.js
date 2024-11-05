import React, { Component } from 'react'

//  class ClickCounter extends Component {

//   // render() {
//   //   const {count} = this.state
//   //   return (
//   //    <button onClick={this.incrementCount}>Clicked {count} times</button>
//   //   )

//   render() {
//     const {count, incrementCount} = this.props
//     return (
//      <button onClick={incrementCount}>Clicked {count} times</button>
//     )
//   }
// }




const ClickCounter = ({ count, incrementCount }) => {
  return (
    <button onClick={incrementCount}>Clicked {count} times</button>
  );
}

export default ClickCounter;
