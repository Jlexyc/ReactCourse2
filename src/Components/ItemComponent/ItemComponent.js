import { useCallback } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import './ItemComponent.css'

export const ItemComponent = ({ item, onDeleteClicked = () => {}, onTitleClicked = () => {}, isRemoving }) => {
  const onDeleteHandler = useCallback(() => onDeleteClicked(item.id), [item.id, onDeleteClicked])
  const onTitleHandler = useCallback(() => {
    onTitleClicked(item.title)
  }, [item.title, onTitleClicked])

  return (
    <tr>
      <td className="clickable" onClick={onTitleHandler}>{item.title}</td>
      <td className="text">{item.description}</td>
      <td className="text">{item.id}</td>
      <td className="text">{item.weight}</td>
      <td>
        {isRemoving ? <CircularProgress /> : <button onClick={onDeleteHandler}>Delete</button>}
      </td>
    </tr>
  )
}