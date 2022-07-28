import React, { useCallback, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ItemsList } from './Components/ItemsList/ItemsList';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers'

import { Switch } from '@mui/material';

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

export const ThemeContext = React.createContext('light');

export const App = () => {

  const [currentTheme, setCurrentTheme] = useState('light')

  const themeModeHasChanged = useCallback((event) => {
    setCurrentTheme(event.target.checked ? 'light' : 'dark')
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeContext.Provider value={currentTheme}>
        <div id={currentTheme}>
          <nav
            style={styles.nav}
          >
            <Link style={styles.linkItem} to="/">List</Link>
            <Switch defaultChecked onChange={themeModeHasChanged}/>
          </nav>
          <Routes>
            <Route path="/*" element={<ItemsList/>} />
            <Route path="/:filterDate" element={<ItemsList/>} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </LocalizationProvider>
  )
}
