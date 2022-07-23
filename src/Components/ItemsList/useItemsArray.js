import { useSearchParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useMemo } from 'react';

import { selectItems } from "../../Store/Items/selectors";

export const useItemsArray = () => {
  const items = useSelector(selectItems);

  const [searchParams] = useSearchParams();
  const sortParameter = searchParams.get('sort')

  return useMemo(() => {
    if (!sortParameter) return items;
    return items.slice().sort((a, b) => {
       if(a[sortParameter] > b[sortParameter]) {
        return 1;
       } else if (a[sortParameter] === b[sortParameter]) {
        return 0;
       } else {
        return -1;
       }
    });
  }, [sortParameter, items])
}