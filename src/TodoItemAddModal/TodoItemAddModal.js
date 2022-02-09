import React, { Component } from 'react';
import './TodoItemAddModal.css';

export class TodoItemAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  render() {
    return (
      <div className='modal'>
        <input value={this.state.title} onChange={(event) => { this.setState({ title: event.target.value }) }}/>
        <input value={this.state.description} onChange={(event) => { this.setState({ description: event.target.value }) }}/>
        <div>
          <button onClick={this.props.onHideModal}>Hide</button>
          <button onClick={() => { 
            this.props.onAddAction({ title: this.state.title, description: this.state.description })
          }}>Add</button>
        </div>
      </div>
    )
  }
}