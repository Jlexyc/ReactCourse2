import React, { useEffect } from 'react'

import './TodoItem.css'

export const TodoItem = ({ item, onShowItem, onTitleChange, onDescriptionChange, index }) => {
  return (
    <div className='main'>
      <input value={item.title} onChange={(event) => onTitleChange(event.target.value, item.id)} />
      <input value={item.description} onChange={(event) => onDescriptionChange(event.target.value, item.id)} />
      <button onClick={() => onShowItem(index) }>Show</button>
    </div>
  )
}
