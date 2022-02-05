import React, { Component } from 'react';
import { Car } from '../Car/Car';

export class CarsList extends Component {

  render() {
    return (
      <table>
          <tbody>
          {this.props.cars.map((car) => {
            return (
              <Car
                key={car.id}
                car={car}
                onDelete={() => this.props.onDeleteCar(car.id) }
                onEdit={() => this.props.onEditCar(car.id) }
              />
            )
          })}
          </tbody>
        </table>
    )
  }
}