export const ADD_CATEGORY_ACTION = 'ADD_CATEGORY_ACTION';
export const DELETE_CATEGORY_ACTION = 'REMOVE_CATEGORY_ACTION';
export const UPDATE_CATEGORY_ACTION = 'UPDATE_CATEGORY_ACTION';

export const updatetCategoryAction = (cat) => {
  return {
    type: UPDATE_CATEGORY_ACTION,
    category: cat,
  }
}