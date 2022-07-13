export const SHOW_ADD_ITEM_MODAL_ACTION = 'SHOW_ADD_ITEM_MODAL_ACTION';
export const HIDE_ADD_ITEM_MODAL_ACTION = 'HIDE_ADD_ITEM_MODAL_ACTION';

export const UPDATE_USER_MODEL_ACTION = 'UPDATE_USER_MODEL_ACTION';
export const SET_IS_REGISTERED_ACTION = "SET_IS_REGISTERED_ACTION";

export const hideAddItemModalAction = () => {
  return {
    type: HIDE_ADD_ITEM_MODAL_ACTION,
  }
}

export const showAddItemModalAction = () => {
  return {
    type: SHOW_ADD_ITEM_MODAL_ACTION,
  }
}

export const updateUserModelAction = (userModel) => {
  return {
    type: UPDATE_USER_MODEL_ACTION,
    userModel,
  }
}

export const setIsRegistered = (isRegistered) => {
  return {
    type: SET_IS_REGISTERED_ACTION,
    isRegistered
  }
}