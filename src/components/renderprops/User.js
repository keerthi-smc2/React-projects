import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
    //   <div>vishwas</div>
    //    <div>{this.props.name}</div>
    // <div>{this.props.name(false)}</div>
    <div>{this.props.render(false)}</div>
    )
  }
}

export default User