import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAddItemModalVisible } from './Store/App/selectors'
import { ItemsList } from './Components/ItemsList/ItemsList';
import { ItemsListButtons } from './Components/ItemsListButtons/ItemsListButtons';
import { AddItemModal } from './Components/AddItemModal/AddItemModal';
import './App.css'

export const App = () => {
  const isAddItemModalVisible = useSelector(selectIsAddItemModalVisible);
  return (
    <div>
      <ItemsListButtons />
      <ItemsList />
      {isAddItemModalVisible ? <AddItemModal /> : null}
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