import React from 'react';
import { Routes, Route, } from "react-router-dom";
import { RegistrationScreen1 } from './RegistrationScreen1';
import { RegistrationScreen2 } from './RegistrationScreen2';
import { RegistrationScreen3 } from './RegistrationScreen3';

export const RegistrationRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegistrationScreen1 />} />
        <Route path="/register/email" element={<RegistrationScreen2 />} />
        <Route path="/register/userdata" element={<RegistrationScreen3 />} />
        <Route path="*" element={<RegistrationScreen1 />} />
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