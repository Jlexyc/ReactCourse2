import { useCallback } from "react"

export const ItemComponent = ({ item, onDeleteClicked = () => {} }) => {
  const onDeleteHandler = useCallback(() => onDeleteClicked(item.id), [item.id, onDeleteClicked])
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>
        <button onClick={onDeleteHandler}>Delete</button>
      </td>
    </tr>
  )
}