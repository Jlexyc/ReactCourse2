import { useCallback } from "react"
import './ItemComponent.css'

export const ItemComponent = ({ item, onDeleteClicked = () => {}, onTitleClicked = () => {} }) => {
  const onDeleteHandler = useCallback(() => onDeleteClicked(item.id), [item.id, onDeleteClicked])
  const onTitleHandler = useCallback(() => {
    onTitleClicked(item.title)
  }, [item.title])

  return (
    <tr>
      <td className="clickable" onClick={onTitleHandler}>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>
        <button onClick={onDeleteHandler}>Delete</button>
      </td>
    </tr>
  )
}