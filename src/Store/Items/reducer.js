import { 
  FETCH_ITEMS_ACTION_SUCCESS,
  FETCH_ITEMS_ACTION_REQUEST,
  FETCH_ITEMS_ACTION_FAILURE,
} from './actions';

const initialState = {
  data: {},
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
      return { ...state, totalReport: action.data, isItemsLoading: false };
    case FETCH_ITEMS_ACTION_FAILURE:
      return { ...state, isItemsLoading: false, error: action.error };
    default:
      return state;
  }
}
