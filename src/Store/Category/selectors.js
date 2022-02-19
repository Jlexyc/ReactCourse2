export const selectCategories = (state) => state.categories.categories;

export const selectCategoriesArray = (state) => {
  const categories = selectCategories(state);
  return Object.values(categories);
}