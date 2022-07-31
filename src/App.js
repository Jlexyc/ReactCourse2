import React, { useCallback, useState, useMemo } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ItemsList } from './Components/ItemsList/ItemsList';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers'

import { Switch } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

  const [currentTheme, setCurrentTheme] = useState('light')

  const maintTheme = useMemo(() => createTheme({
    palette: {
      mode: currentTheme,
    },
  }), [currentTheme]) ;

  const themeModeHasChanged = useCallback((event) => {
    setCurrentTheme(event.target.checked ? 'light' : 'dark')
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={maintTheme}>
        <div className="mainBody" id={currentTheme}>
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
      </ThemeProvider>
    </LocalizationProvider>
  )
}
