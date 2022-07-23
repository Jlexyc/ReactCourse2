import { 
  DELETE_ITEM_ACTION_REQUEST,
  DELETE_ITEM_ACTION_SUCCESS,
  DELETE_ITEM_ACTION_FAILURE,
  FETCH_ITEMS_ACTION_SUCCESS,
  FETCH_ITEMS_ACTION_REQUEST,
  FETCH_ITEMS_ACTION_FAILURE,
  ADD_ITEM_ACTION_REQUEST,
  ADD_ITEM_ACTION_SUCCESS,
  ADD_ITEM_ACTION_FAIURE,
} from './actions';

const initialState = {
  items: [],
  error: null,
  isItemsLoading: false,
  removingItems: {},
  removingItemsError: {},
  isAddingItem: false,
  isAddingItemError: null,
}

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_ACTION_REQUEST:
      return { ...state, isItemsLoading: true, error: null }
    case FETCH_ITEMS_ACTION_SUCCESS:
      return { ...state, items: action.items, isItemsLoading: false };
    case FETCH_ITEMS_ACTION_FAILURE:
      return { ...state, isItemsLoading: false, error: action.error };
    case DELETE_ITEM_ACTION_REQUEST:
      return { 
        ...state, 
        removingItems: {
          ...state.removingItems,
          [action.id]: true,
        },
        removingItemsError: {
          ...state.removingItemsError,
          [action.id]: null,
        },
      };
    case DELETE_ITEM_ACTION_SUCCESS:
      return { 
        ...state, 
        removingItems: {
          ...state.removingItems,
          [action.id]: false,
        },
        items: state.items.filter((i) => i.id !== action.id),
      };
    case ADD_ITEM_ACTION_REQUEST:
      return {
        ...state,
        isAddingItem: true,
        isAddingItemError: null,
      }
    case ADD_ITEM_ACTION_SUCCESS:
      return {
        ...state,
        isAddingItem: false,
        items: [...state.items, action.item],
      }
    default:
      return state;
  }
}
