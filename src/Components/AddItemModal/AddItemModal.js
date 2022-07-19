import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addItem } from '../../Store/Items/thunks'

export const AddItemModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onAddItem = useCallback(() => {
    dispatch(addItem({
      title,
      description,
      weight: '100',
    }))
    navigate("/");
  }, [dispatch, title, description, navigate])

  const onTitleChanged = useCallback((event) => {
    setTitle(event.target.value);
  }, [])

  const onDescriptionChanged = useCallback((event) => {
    setDescription(event.target.value);
  }, [])

  const onHideModal = useCallback(() => {
    navigate("/");
  }, [navigate])

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