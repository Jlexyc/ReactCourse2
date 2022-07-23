import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ItemsList } from './Components/ItemsList/ItemsList';
import ItemsListC from './Components/ItemsList/ItemsListC';
import { AddItemModal } from './Components/AddItemModal/AddItemModal';
import { About } from './Components/About/About';
import { CategoriesList } from './Components/Categories/CategoriesList';

import './App.css'

const styles = {
  nav: {
    borderBottom: "solid 1px",
    paddingBottom: "1rem"
  },
  linkItem: {
    padding: "0 20px 0 20px",
  }
}

export const App = () => {
  return (
    <div>
       <nav
        style={styles.nav}
      >
        <Link style={styles.linkItem} to="/">List</Link>
        <Link style={styles.linkItem} to="/list?sort=title">Sorted List</Link>
        <Link style={styles.linkItem} to="/addItem">Add Item</Link>
        <Link style={styles.linkItem} to="/categories">Categories</Link>
        <Link style={styles.linkItem} to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/*" element={<ItemsListC />} />
        <Route path="/list" element={<ItemsList />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/items/:categoryId" element={<ItemsList />} />
        <Route path="/addItem" element={<AddItemModal />} />
        <Route path="/about" element={<About />} />
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