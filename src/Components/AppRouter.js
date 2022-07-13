import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Link } from "react-router-dom";
import { ItemsList } from './ItemsList/ItemsList';
import { AddItemModal } from './AddItemModal/AddItemModal';
import { About } from './About/About';
import { CategoriesList } from './Categories/CategoriesList';
import { PageNotFound } from './PageNotFound/PageNotFound';

import { setIsRegistered } from '../Store/App/actions';
const styles = {
  nav: {
    borderBottom: "solid 1px",
    paddingBottom: "1rem"
  },
  linkItem: {
    padding: "0 20px 0 20px",
  }
}

const Something = () => {
  return (
    <div> some strig</div>
  )
}

export const AppRouter = () => {
  const dispatch = useDispatch();
  const onLogOutClicked = useCallback(() => {
    dispatch(setIsRegistered(false))
    localStorage.setItem('isRegistered', false);
    localStorage.setItem('user', '{}');
  }, [dispatch])
  
  return (
    <div>
      <nav
        style={styles.nav}
      >
        <Link style={styles.linkItem} to="/">List</Link>
        <Link style={styles.linkItem} to="/addItem">Add Item</Link>
        <Link style={styles.linkItem} to="/categories">Categories</Link>
        <Link style={styles.linkItem} to="/about">About</Link>
        <button onClick={onLogOutClicked}>Log Out</button>
      </nav>
      <Routes>
        <Route path="/*" element={<ItemsList />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/items/:categoryId" element={<ItemsList />} />
        <Route path="/addItem" element={<AddItemModal />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

// ToDo Item:
// {
//   id: string,
//   title: string,
//   description: string,
//   categoryId: string,
// }

// categoryModel:
// {
//   id: string,
//   name: string,
// }