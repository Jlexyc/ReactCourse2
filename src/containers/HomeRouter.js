import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AddNewItem } from './AddNewItem';

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddNewItem />} />
    </Routes>
  )
}