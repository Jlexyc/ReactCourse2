import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AddCarModal.css";

export class AddCarModal extends Component {
  static propTypes = {
    onAddItemClick: PropTypes.func,
    onEditItemClick: PropTypes.func,
    onCloseAddCarModalClick: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      color: props.car?.color || '',
      name: props.car?.name || '',
      type: props.car?.type || '',
    }
  }

  render() {
    return (
      <div className='modalForm'>
        <form onSubmit={() => {
          this.props.car?.id ?
          this.props.onEditItemClick({...this.state, id: this.props.car.id}) :
          this.props.onAddItemClick(this.state)
        }}>
          <p>Name:</p>
          <input value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }}/>
          <p>Color:</p>
          <input value={this.state.color} onChange={(event) => { this.setState({ color: event.target.value }) }}/>
          <p>Type:</p>
          <input value={this.state.type} onChange={(event) => { this.setState({ type: event.target.value }) }}/>
          <br />
          <br />
          <button>{this.props.car?.id ? 'Edit' : 'Add'}</button>
          <button onClick={this.props.onCloseAddCarModalClick}>Close</button>
        </form>
      </div>
    )
  }
}