import { createSelector } from 'reselect'

export const selectItems = (state) => state.items.items;
export const selectIsItemsLoading = (state) => state.items.isItemsLoading;
export const selectItemsError = (state) => state.items.error;
export const selectRemovingItems = (state) => state.items.removingItems;

export const selectTotalWeight = createSelector(
  [selectItems],
  (items) => items.reduce((total, item) => total += parseFloat(item.weight), 0)
)