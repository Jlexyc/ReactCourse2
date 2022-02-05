import React, { Component } from 'react';
import { CarsList } from './CarsList/CarsList';
import { CarsListButtons } from './CarsListButtons/CarsListButtons';
import { AddCarModal } from './AddCarModal/AddCarModal';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = ({ name, color, type }) => {
      this.setState({
        isAddModalVisible: false,
        cars: [
          ...this.state.cars,
          {
            id: uuidv4(),
            name,
            color,
            type,
          }
        ]
      })
    }

    this.onApplyEditCar = (car) => {
      this.setState({
        isAddModalVisible: false,
        editingCar: null,
        cars: this.state.cars.map((stateCar) => {
          if (stateCar.id === car.id) {
            return car;
          }
          return stateCar;
        })
      })
    }

    this.onEditCar = (id) => {
      const car = this.state.cars.find((car) => car.id === id)
      this.setState({
        isAddModalVisible: true,
        editingCar: car,
      })
    }

    this.onDeleteCar = (id) => {
      this.setState({
        cars: this.state.cars.filter((car) => car.id != id)
      })
    }

    this.onModalClose = () => {
      this.setState({
        isAddModalVisible: false,
        editingCar: null,
      })
    }

    this.state = {
      isAddModalVisible: false,
      cars: [
        {
          id: uuidv4(),
          name: 'Toyota',
          color: 'Red',
          type: 'A',
        },
        {
          id: uuidv4(),
          name: 'Volvo',
          color: 'Blue',
          type: 'A',
        },
        {
          id: uuidv4(),
          name: 'Nissan',
          color: 'Green',
          type: 'C',
        },
        {
          id: uuidv4(),
          name: 'WV',
          color: 'Purple',
          type: 'E',
        },
        {
          id: uuidv4(),
          name: 'Skoda',
          color: 'Crimson',
          type: 'D',
        },
        {
          id: uuidv4(),
          name: 'Mazda',
          color: 'Red',
          type: 'B',
        },
        {
          id: uuidv4(),
          name: 'VAZ',
          color: 'Red',
          type: 'B',
        }
      ]
    }
  }

  render() { 
    return (
      <div>
        <CarsList 
          cars={this.state.cars}
          onDeleteCar={this.onDeleteCar}
          onEditCar={this.onEditCar}
        />
        <CarsListButtons onAddClicked={() => { this.setState({ isAddModalVisible: true })}}/>
        {this.state.isAddModalVisible ? 
          <AddCarModal 
            onAddItemClick={this.onAddItem}
            onCloseAddCarModalClick={this.onModalClose}
            onEditItemClick={this.onApplyEditCar}
            car={this.state.editingCar}
          /> 
          : null}
      </div>
    )
  }
}

export default App;
