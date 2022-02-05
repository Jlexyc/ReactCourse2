import React, { Component } from 'react';

export class Car extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.car?.name || " - "}</td>
        <td>{this.props.car?.color || " - "}</td>
        <td>{this.props.car?.type || " - "}</td>
        <td>
          <button onClick={this.props.onDelete}>Delete</button>
        </td>
        <td>
          <button onClick={this.props.onEdit}>Edit</button>
        </td>
      </tr>
    )
  }
}
