import React, { Component } from 'react'

// class Counter extends Component {
//     constructor(props) {
//         super(props) 

//         this .state = {
//             count :0
//         }
//     }

//     incrementCount = () => {
//         this.setState(prevState => {
//             return { count: prevState.count + 1 }
//         })
//     }
//   render() {
//     return (
//       <div>
//         {this.props.render(this.state.count, this.incrementCount)}
//         {/* {this.props.children(this.state.count, this.incrementCount)} */}
//       </div>
//     )
//   }
// }

import { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      {props.render(count, incrementCount)}
      {/* {props.children(count, incrementCount)} */}
    </div>
  );
}

export default Counter;


