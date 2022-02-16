import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM_ACTION, DELETE_ITEM_ACTION } from './actions';

const initialState = {
  items: [
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

export const itemsReducer = (state = initialState, action) => {
  console.log('action: ', action);
  console.log('state: ', state);
  switch (action.type) {
    case ADD_ITEM_ACTION:
      return { items: [...state.items, action.item] };
    case DELETE_ITEM_ACTION:
      return {
        items: state.items.filter((item) => item.id !== action.id)
      };
    default:
      return state;
  }
}