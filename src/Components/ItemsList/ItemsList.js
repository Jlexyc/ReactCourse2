import { useCallback, useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ItemComponent } from "../ItemComponent/ItemComponent";
import { selectItems } from "../../Store/Items/selectors";
import { selectCategories } from "../../Store/Category/selectors";
import { deleteItemAction } from "../../Store/Items/actions";

export const ItemsList = () => {
  // const items = useSelector(selectItems);
  // const categories = useSelector(selectCategories)
  const navigate = useNavigate();
  // const { categoryId } = useParams();

  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  // const itemsToDisplay = useMemo(() => {
  //   let returnItems = [];
  //   if (categoryId) {
  //     returnItems = items.filter((i) => i.title === categoryId )
  //   } else {
  //     returnItems = items;
  //   }
  //   return returnItems.map((item) => {
  //     return {
  //       ...item,
  //       category: categories[item.categoryId].name,
  //     }
  //   })
  // }, [items, categoryId])
  
  useEffect(async () => {
    // fetch('http://127.0.0.1:8080/goods')
    //   .then((response) => response.json())
    //   .then((data) => console.log('data: ', data))
    //   .catch(error => alert('sorry, something went wrong'))

    try {
      const response = await fetch('http://127.0.0.1:8080/goods');
      const data = await response.json()
      console.log('data: ', data)
    }
    catch (error) {
      alert('sorry, something went wrong')
    }
  }, []);

  const dispatch = useDispatch();

  const onDeleteElement = useCallback(
    (id) => dispatch(deleteItemAction({ id })),
    [dispatch],
  )
  const onTitleClicked = useCallback(
    (title) => {
      navigate('/items/' + title);
    },
    [navigate]
  )

  return (
    <table>
      <tbody>
        {itemsToDisplay.map((item) => <ItemComponent 
          onDeleteClicked={onDeleteElement} 
          onTitleClicked={onTitleClicked}
          key={item.id} 
          item={item}
        />)}
      </tbody>
    </table>
  )
}