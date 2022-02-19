import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM_ACTION, DELETE_ITEM_ACTION } from './actions';

const initialState = {
  items: [
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy drinks',
      categoryId: 0,
    },
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy potatoes',
      categoryId: 3,
    },
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy oranges',
      categoryId: 2,
    },
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy mandarins',
      categoryId: 1,
    },
    {
      id: uuidv4(),
      title: 'Buy',
      description: 'Buy milk',
      categoryId: 1,
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell BTC',
      categoryId: 2,
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell ETH',
      categoryId: 2,
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell laptop',
      categoryId: 2,
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell TV',
      categoryId: 2,
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell appartaments',
      categoryId: 1,
    },
    {
      id: uuidv4(),
      title: 'Sell',
      description: 'Sell house',
      categoryId: 0,
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