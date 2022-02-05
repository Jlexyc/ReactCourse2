import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class CarsListButtons extends Component {
  static propTypes = {
    onAddClicked: PropTypes.func,
  }

  render () {
    return (
      <div>
        <button 
          onClick={this.props.onAddClicked}>Add Car</button>
      </div>
    )
  }
}
