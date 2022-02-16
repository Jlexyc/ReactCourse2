import {
  HIDE_ADD_ITEM_MODAL_ACTION,
  SHOW_ADD_ITEM_MODAL_ACTION
} from './actions';

const initialState = {
  isAddItemModalVisible: false,
}
export const appReducer = (state = initialState, action) => {
  console.log('state app: ', state);
  switch (action.type) {
    case HIDE_ADD_ITEM_MODAL_ACTION:
      return {
        isAddItemModalVisible: false,
      }
    case SHOW_ADD_ITEM_MODAL_ACTION:
      return {
        isAddItemModalVisible: true,
      }
    default:
      return state;
  }
}