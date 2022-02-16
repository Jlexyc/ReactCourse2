import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { hideAddItemModalAction } from "../../Store/App/actions"
import { addItemAction } from '../../Store/Items/actions'

export const AddItemModal = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onAddItem = useCallback(() => {
    dispatch(addItemAction({
      title,
      description,
    }))
  }, [dispatch, title, description])

  const onTitleChanged = useCallback((event) => {
    setTitle(event.target.value);
  }, [])

  const onDescriptionChanged = useCallback((event) => {
    setDescription(event.target.value);
  }, [])

  const onHideModal = useCallback(() => {
    dispatch(hideAddItemModalAction())
  }, [dispatch])

  return (
    <div>
      <div>
        Title:
      </div>
      <input value={title} onChange={onTitleChanged} />
      <div>
        Description:
      </div>
      <input value={description} onChange={onDescriptionChanged} />
      <br />
      <button onClick={onAddItem}>Add Item</button>
      <button onClick={onHideModal}>Close</button>
    </div>
  )
}