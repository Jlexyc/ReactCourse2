import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showAddItemModalAction } from '../../Store/App/actions';

export const ItemsListButtons = () => {
  const dispatch = useDispatch();

  const onButtonClick = useCallback(() => {
    dispatch(showAddItemModalAction())
  }, [dispatch])

  return (
    <button onClick={onButtonClick}>Add</button>
  )
}