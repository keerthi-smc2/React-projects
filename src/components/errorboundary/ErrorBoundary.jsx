import React, { Component } from 'react'
import Nopage from '../Nopage';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
          this.state = {error:null}
    }
    componentDidCatch(error) {
        this.setState({ error:error })
    }
    render() {
        if (this.state.error) {
          return <Nopage />;
        }
        return this.props.children;
      }
    }


export default ErrorBoundary;