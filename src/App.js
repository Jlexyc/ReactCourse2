import React from 'react';
import { useSelector } from 'react-redux';
import { isRegistered } from './Store/App/selectors'
import { AppRouter } from './Components/AppRouter';
import { RegistrationRouter } from './Components/Registration';
import './App.css'

export const App = () => {
  const isAppRegistered = useSelector(isRegistered);
  return isAppRegistered ? <AppRouter /> : <RegistrationRouter />
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