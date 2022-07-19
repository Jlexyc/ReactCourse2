import { useCallback, useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ItemComponent } from "../ItemComponent/ItemComponent";
import { selectItems, selectIsItemsLoading, selectItemsError, selectRemovingItems } from "../../Store/Items/selectors";
import { selectCategories } from "../../Store/Category/selectors";
import { deleteItem, fetchItems } from "../../Store/Items/thunks";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styles = {
  progress: {
    display: 'flex',
    margin: 20,
  }
}
;

export const ItemsList = () => {
  const items = useSelector(selectItems);
  const isItemsLoading = useSelector(selectIsItemsLoading);
  const itemsError = useSelector(selectItemsError);
  const removingItems = useSelector(selectRemovingItems);
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
      </tbody>
    </table>
  )
}