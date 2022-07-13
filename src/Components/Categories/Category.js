import React from 'react';
import { useState, useCallback } from 'react';

export const Category = ({ cat, onSave = () => {} }) => {
  const [categoryName, setCategoryName] = useState(cat.name);

  const onCategoryNameChange = useCallback((event) => {
    setCategoryName(event.target.value)
  }, [])

  const onSaveClicked = useCallback(() => {
    onSave({
      ...cat,
      name: categoryName,
    })
  })

  return (
    <tr>
      <td>{cat.id}</td>
      <td><input value={categoryName} onChange={onCategoryNameChange}/></td>
      <td><button onClick={onSaveClicked}>Save</button></td>
    </tr>
  )
}