import React, { Component } from 'react';
import './TodoItemModal.css';

export class TodoItemModal extends Component {
  render() {
    return (
      <div className='modal'>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.description}</p>
        <button onClick={this.props.onHideModal}>Hide</button>
      </div>
    )
  }
}