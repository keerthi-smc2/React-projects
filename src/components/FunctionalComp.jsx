import React from 'react';
import ReactDOM from 'react-dom/client';

class FunctionalComp extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
export default FunctionalComp
