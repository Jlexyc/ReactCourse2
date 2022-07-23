import { 
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
  deleteItemRequest,
  deleteItemSuccess,
  deleteItemFailure,
  addItemRequest,
  addItemSuccess,
  addItemFailure,
} from './actions'

const baseUrl = 'http://127.0.0.1:8080';

export const addItem = (item) => {
  return async (dispatch, getState) => {
    dispatch(addItemRequest(item));
    try {
      const response = await fetch([baseUrl, 'goods'].join('/'), 
        { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        }
      );
      console.log('response: ', response)
      if (response.ok) {
        const data = await response.json();
        console.log('response: ', data)
        dispatch(addItemSuccess(data));
      } else {
        dispatch(addItemFailure('Something went wrong'));
      }
    } catch (error) {
      dispatch(addItemFailure(error.message));
    }
  }
}

export const deleteItem = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteItemRequest(id));
    try {
      const response = await fetch([baseUrl, 'goods', id].join('/'), { method: 'DELETE'});
      console.log('response: ', response)
      if (response.ok) {
        const data = await response.json();
        console.log('response: ', data)
        dispatch(deleteItemSuccess(id));
      } else {
        dispatch(deleteItemFailure('Something went wrong'));
      }
    } catch (error) {
      dispatch(deleteItemFailure(error.message));
    }
  }
}

export const fetchItems = () => {
  return async (dispatch, getState) => {
    dispatch(fetchItemsRequest());
    try {
      const response = await fetch(baseUrl + '/goods');
      console.log('response: ', response)
      if (response.ok) {
        const data = await response.json();
        console.log('response: ', data)
        dispatch(fetchItemsSuccess(data.goods));
      } else {
        dispatch(fetchItemsFailure('Something went wrong'));
      }
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  }
}