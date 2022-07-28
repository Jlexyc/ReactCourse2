import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM_ACTION = 'ADD_ITEM_ACTION';

export const DELETE_ITEM_ACTION_REQUEST = 'DELETE_ITEM_ACTION_REQUEST';
export const DELETE_ITEM_ACTION_SUCCESS = 'DELETE_ITEM_ACTION_SUCCESS';
export const DELETE_ITEM_ACTION_FAILURE = 'DELETE_ITEM_ACTION_FAILURE';

export const FETCH_ITEMS_ACTION_REQUEST = 'FETCH_ITEMS_ACTION_REQUEST';
export const FETCH_ITEMS_ACTION_SUCCESS = 'FETCH_ITEMS_ACTION_SUCCESS';
export const FETCH_ITEMS_ACTION_FAILURE = 'FETCH_ITEMS_ACTION_FAILURE';

export const ADD_ITEM_ACTION_REQUEST = 'ADD_ITEM_ACTION_REQUEST';
export const ADD_ITEM_ACTION_SUCCESS = 'ADD_ITEM_ACTION_SUCCESS';
export const ADD_ITEM_ACTION_FAILURE = 'ADD_ITEM_ACTION_FAILURE';

export const addItemRequest = (item) => {
  return {
    type: DELETE_ITEM_ACTION_REQUEST,
    item,
  }
}

export const addItemSuccess = (item) => {
  return {
    type: DELETE_ITEM_ACTION_SUCCESS,
    item,
  }
}

export const addItemFailure = (error) => {
  return {
    type: DELETE_ITEM_ACTION_FAILURE,
    error,
  }
}

export const deleteItemRequest = (id) => {
  return {
    type: DELETE_ITEM_ACTION_REQUEST,
    id,
  }
}

export const deleteItemSuccess = (id) => {
  return {
    type: DELETE_ITEM_ACTION_SUCCESS,
    id,
  }
}

export const deleteItemFailure = (id) => {
  return {
    type: DELETE_ITEM_ACTION_FAILURE,
    id,
  }
}

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_ACTION_REQUEST,
  }
}

export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_ACTION_FAILURE,
    error,
  }
}

export const fetchItemsSuccess = (data) => {
  return {
    type: FETCH_ITEMS_ACTION_SUCCESS,
    data,
  }
}