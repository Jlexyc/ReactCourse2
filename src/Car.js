import React, { Component } from 'react';

class Car extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.car?.name || " N/A "}</td>
        <td>{this.props.car?.color || "  N/A  "}</td>
        <td>{this.props.car?.type || "  N/A  "}</td>
      </tr>
    )
  }
}

export default Car;
