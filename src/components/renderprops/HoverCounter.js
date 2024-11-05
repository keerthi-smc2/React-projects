import React, { Component } from 'react'

//  class HoverCounter extends Component {
   
//     // render() {
//     //     const {count} = this.state
//     //     return (
//     //         <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
//     //     )

//       render() {
//         const {count, incrementCount} = this.props
//         return (
//             <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
//         )
//   }
// }

const HoverCounter = ({ count, incrementCount }) => {
    return (
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        );
  }

export default HoverCounter