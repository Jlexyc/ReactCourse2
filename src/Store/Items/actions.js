import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM_ACTION = 'ADD_ITEM_ACTION';
export const DELETE_ITEM_ACTION = 'DELETE_ITEM_ACTION';

export const addItemAction = ({ title, description }) => {
  return {
    type: ADD_ITEM_ACTION,
    item: {
      title,
      description,
      id: uuidv4(),
    },
  }
}

export const deleteItemAction = ({ id }) => {
  return {
    type: DELETE_ITEM_ACTION,
    id,
  }
}