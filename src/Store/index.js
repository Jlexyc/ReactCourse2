import { createStore, combineReducers } from 'redux';
import { itemsReducer } from './Items/reducer';
import { appReducer } from './App/reducer';

export const selectItems = (state) => state.items.items;

export const store = createStore(combineReducers({
  items: itemsReducer,
  app: appReducer,
}))

console.log('store: ', store.getState());