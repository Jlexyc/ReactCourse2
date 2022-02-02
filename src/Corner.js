import React, { Component } from 'react';
import './Corner.css'

class Corner extends Component {
  constructor(props) {
    super(props);
    console.log('Props: ', this.props.children)
  }
  
  render() {
    return (
      <div className="corner">{this.props.children}</div>
    )
  }
}

export default Corner;