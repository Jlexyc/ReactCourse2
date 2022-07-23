import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ItemComponent } from "../ItemComponent/ItemComponent";
import { selectIsItemsLoading, selectItemsError, selectRemovingItems, selectTotalWeight } from "../../Store/Items/selectors";
import { deleteItem, fetchItems } from "../../Store/Items/thunks";
import { useItemsArray } from './useItemsArray';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styles = {
  progress: {
    display: 'flex',
    margin: 20,
  }
};

export const ItemsList = () => {
  const isItemsLoading = useSelector(selectIsItemsLoading);
  const itemsError = useSelector(selectItemsError);
  const removingItems = useSelector(selectRemovingItems);
  const total = useSelector(selectTotalWeight);
  // validate sort param

  const items = useItemsArray();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch])

  const onDeleteElement = useCallback(
    (id) => dispatch(deleteItem(id)),
    [dispatch],
  )
  const onTitleClicked = useCallback(
    (title) => {
      navigate('/items/' + title);
    },
    [navigate]
  )

  if (itemsError) {
    return (
      <div>{itemsError}</div>
    )
  }

  if (isItemsLoading) {
    return (
      <Box sx={styles.progress}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <table>
      <tbody>
        {items.map((item) => <ItemComponent 
          onDeleteClicked={onDeleteElement} 
          onTitleClicked={onTitleClicked}
          key={item.id} 
          item={item}
          isRemoving={removingItems[item.id]}
        />)}
        <tr>
          <td />
          <td />
          <td>Total:</td>
          <td>{total}</td>
        </ tr>
      </tbody>
    </table>
  )
}