import { ADD_NEW_ITEM, REMOVE_ITEM } from './actions'

const initialState = {
  tasks: [
    {
      id: '0',
      name: 'Buy Milk',
      assignee: 'Me'
    },
    {
      id: '1',
      name: 'Buy Potatoes',
      assignee: 'Irynka'
    },
    {
      id: '2',
      name: 'Buy Cucumber',
      assignee: 'Mykola'
    },
    {
      id: '3',
      name: 'Buy Tomatoes',
      assignee: 'Mykhailo'
    },
  ],
  nextId: 4,
}

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, id: state.nextId }],
        nextId: state.nextId + 1,
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        tasks: state.tasks.filter((i) => i.id !== action.payload)
      }
    }
    default: {
      return state;
    }
  }
}