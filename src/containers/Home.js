import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';
import { removeItem } from '../rdx/todoList/actions';
import { selectTodoList } from '../rdx/todoList/selectors';
import { TodoItem } from "../components/TodoItem";

import './Home.css'

export const Home = () => {
  const items = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const onItemDelete = useCallback((id) => {
    dispatch(removeItem(id));
  }, [dispatch])

  return (
    <div className="Home">
      {items.map((i) => <TodoItem key={i.id} task={i} onDelete={onItemDelete} />)}
    </div>
  )
}