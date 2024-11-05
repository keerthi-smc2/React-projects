import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Qty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  incrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  };

  decrementQuantity = () => {
    if (this.state.quantity > 0) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };

  render() {
    return (
      <div>
        
        <Button  variant="light" onClick={this.incrementQuantity}>+</Button>
        <span>{this.state.quantity}</span>
        <Button  variant="light" onClick={this.decrementQuantity}>-</Button>
      </div>
    );
  }
}

export default Qty;
