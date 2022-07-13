import {
  HIDE_ADD_ITEM_MODAL_ACTION,
  SHOW_ADD_ITEM_MODAL_ACTION,
  UPDATE_USER_MODEL_ACTION,
  SET_IS_REGISTERED_ACTION,
} from './actions';

const initialState = {
  isAddItemModalVisible: false,
  isRegistered: false,
  user: {},
}
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_ADD_ITEM_MODAL_ACTION:
      return {
        ...state,
        isAddItemModalVisible: false,
      }
    case SHOW_ADD_ITEM_MODAL_ACTION:
      return {
        ...state,
        isAddItemModalVisible: true,
      }
    case UPDATE_USER_MODEL_ACTION:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.userModel,
        }
      }
    case SET_IS_REGISTERED_ACTION:
      return {
        ...state,
        isRegistered: action.isRegistered
      }
    default:
      return state;
  }
}