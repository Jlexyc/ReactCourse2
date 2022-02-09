import React, { Component } from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoItemModal } from './TodoItemModal/TodoItemModal';
import { TodoItemAddModal } from './TodoItemAddModal/TodoItemAddModal';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

const initialState = {
  isModalVisible: false,
  isAddModalVisible: false,
  itemIndexToView: 0,
  todoItems: [
    {
      id: uuidv4(),
      title: 'Buy Something',
      description: 'Buy drinks',
    }
  ],
  filteredItems: []
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.mapItem = this.mapItem.bind(this);
  }

  mapItem(item, i) {
    return (
    <TodoItem 
      key={item.id} 
      item={item}
      onTitleChange={(text) => {
        this.setState({ todoItems: this.state.todoItems.map((currentItem) => { 
          if (currentItem.id === item.id) {
            return {
              ...currentItem,
              title: text,
            }
          }
          return currentItem;
        }) 
      });
      }}
      onDescriptionChange={(text) => {
        this.setState({ todoItems: this.state.todoItems.map((currentItem) => { 
          if (currentItem.id === item.id) {
            return {
              ...currentItem,
              description: text,
            }
          }
          return currentItem;
        })
        });
      }}
      onShowItem={() => { 
        this.setState({ 
          isModalVisible: true,
          itemIndexToView: i,
        });
      }}
    />)
  }

  render() { 
    return (
      <div className='app'>
        {this.state.todoItems.map(this.mapItem)}
        {this.state.isModalVisible ? 
        <TodoItemModal 
          item={this.state.todoItems[this.state.itemIndexToView]}
          onHideModal={() => {
            this.setState({ isModalVisible: false });
          }}
        /> : null}
        {this.state.isAddModalVisible ? 
        <TodoItemAddModal 
          onAddAction={({ title, description }) => {
            this.setState({
              isAddModalVisible: false,
              todoItems: [
                ...this.state.todoItems,
                {
                  id: uuidv4(),
                  title,
                  description,
                }
              ]
            })
          }}
          onHideModal={() => {
            this.setState({ isAddModalVisible: false });
          }}
        /> : null}
        <br />
        <br />
        <button onClick={() => { this.setState({ isAddModalVisible: true })}}>Add Item</button>
        <br />
        <br />
        <button onClick={() => { this.setState(initialState) }}>Reset</button>
      </div>
    )
  }
}

export default App;

// ToDo Item:
// {
//   id: string,
//   title: string,
//   description: string,
//   categoryId: string,
// }

// categoryModel:
// {
//   id: string,
//   name: string,
// }