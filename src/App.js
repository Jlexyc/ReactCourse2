import React, { useState, useEffect, useCallback } from 'react';
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
      title: 'Buy',
      description: 'Buy drinks',
    },
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy potatoes',
    },
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy oranges',
    },
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy mandarins',
    },
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy milk',
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell BTC',
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell ETH',
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell laptop',
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell TV',
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell appartaments',
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell house',
    },
  ]
}

export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(initialState.isModalVisible);
  const [isAddModalVisible, setIsAddModalVisible] = useState(initialState.isAddModalVisible);
  const [itemIndexToView, setItemIndexToView] = useState(initialState.itemIndexToView);
  const [todoItems, setTodoItems] = useState(initialState.todoItems);

  const [todoItemsFiltered, setTodoItemsFiltered] = useState(null);

  const [titleFilterValue, setTitleFilterValue] = useState('');
  const [descFilterValue, setDescFilterValue] = useState('');

  useEffect(() => {
    if(titleFilterValue.length || descFilterValue.length) {
      let itemsToFilter = todoItems;
      if (titleFilterValue.length) {
        itemsToFilter = itemsToFilter.filter((item) => item.title.toLowerCase().includes(titleFilterValue.toLowerCase()));
      }
      if (descFilterValue.length) {
        itemsToFilter = itemsToFilter.filter((item) => item.description.toLowerCase().includes(descFilterValue.toLowerCase()));
      }
      setTodoItemsFiltered(itemsToFilter);
    }
    else {
      setTodoItemsFiltered(null);
    }
  }, [todoItems, titleFilterValue, descFilterValue])

  const onHideModal = useCallback(() => {
    setIsModalVisible(false);
  }, [setIsModalVisible])

  const onHideAddModal = useCallback(() => {
    setIsAddModalVisible(false);
  }, [setIsAddModalVisible])

  const onShowAddModal = useCallback(() => {
    setIsAddModalVisible(true)
  }, [setIsAddModalVisible])


  const onAddAction = useCallback(({ title, description }) => {
    setIsAddModalVisible(false);
    setTodoItems([
      ...todoItems,
      {
        id: uuidv4(),
        title,
        description,
      }
    ])
  }, [setIsAddModalVisible, setTodoItems, todoItems])

  const onResetState = useCallback(() => { 
    setIsModalVisible(initialState.isModalVisible)
    setIsAddModalVisible(initialState.isAddModalVisible)
    setItemIndexToView(initialState.itemIndexToView)
    setTodoItems(initialState.todoItems)
  }, [setIsModalVisible, setIsAddModalVisible, setItemIndexToView, setTodoItems])

  const onTitleChange = useCallback((text, itemId) => {
    setTodoItems(todoItems.map((currentItem) => { 
      if (currentItem.id === itemId) {
        return {
          ...currentItem,
          title: text,
        }
      }
      return currentItem;
    })
  )
  }, [setTodoItems, todoItems])

  const onDescriptionChange = useCallback((text, itemId) => {
    setTodoItems(todoItems.map((currentItem) => { 
        if (currentItem.id === itemId) {
          return {
            ...currentItem,
            description: text,
          }
        }
        return currentItem;
      })
    )
  }, [setTodoItems, todoItems])

  const onShowItem = useCallback((index) => {
    setIsModalVisible(true);
    setItemIndexToView(index);
  }, [setIsModalVisible, setItemIndexToView])

  const onTitleFilterChange = useCallback((event) => {
    setTitleFilterValue(event.target.value);
  }, [setTitleFilterValue, setDescFilterValue])

  const onDescFilterChange = useCallback((event) => {
    setDescFilterValue(event.target.value);
  }, [setTitleFilterValue, setDescFilterValue])

  return (
    <div className='app'>
      <div>
        <input value={titleFilterValue} onChange={onTitleFilterChange} />
        <input value={descFilterValue} onChange={onDescFilterChange} />
      </div>
      {(todoItemsFiltered || todoItems).map((item, i) => {
        return (
          <TodoItem 
            key={item.id}
            index={i}
            item={item}
            onTitleChange={onTitleChange}
            onDescriptionChange={onDescriptionChange}
            onShowItem={onShowItem}
          />
        )
      })}
      {isModalVisible ? 
      <TodoItemModal 
        item={todoItems[itemIndexToView]}
        onHideModal={onHideModal}
      /> : null}
      {isAddModalVisible ? 
      <TodoItemAddModal 
        onAddAction={onAddAction}
        onHideModal={onHideAddModal}
      /> : null}
      <br />
      <br />
      <button onClick={onShowAddModal}>Add Item</button>
      <br />
      <br />
      <button onClick={onResetState}>Reset</button>
    </div>
  )
}

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