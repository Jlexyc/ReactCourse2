import React, { Component } from 'react';
import Car from './Car';
import Corner from './Corner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {
          id: '0',
          name: 'Toyota',
          color: 'Red',
          type: 'A',
        },
        {
          id: '1',
          name: 'Volvo',
          color: 'Blue',
          type: 'A',
        },
        {
          id: '2',
          name: 'Nissan',
          color: 'Green',
          type: 'C',
        },
        {
          id: '3',
          name: 'WV',
          color: 'Purple',
          type: 'E',
        },
        {
          id: '4',
          name: 'Skoda',
          color: 'Crimson',
          type: 'D',
        },
        {
          id: '5',
          name: 'Mazda',
          color: 'Red',
          type: 'B',
        },
        {
          id: '6',
          name: 'VAZ',
          color: 'Red',
          type: 'B',
        }
      ]
    }
  }

  render() { 
    return (
      <Corner>
        <table>
          <tbody>
          {this.state.cars.map((car, i) => {
            return (
              <Car
                key={car.id}
                car={car} 
              />
            )
          })}
          </tbody>
        </table>
        <button 
          onClick={() => { 
            this.setState({ 
              cars: [...this.state.cars, 
                {          
                  name: 'Mers',
                  color: 'Yellow',
                  type: 'O', 
                } 
              ] }) 
          }}>Add element</button>
        <button 
        onClick={() => { 
          this.setState({ 
            cars: this.state.cars.slice(0, this.state.cars.length - 1) }) 
        }}>Delete element</button>
      </Corner>
    )
  }
}

export default App;
