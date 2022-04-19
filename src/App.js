import React, { useState, useEffect, useContext } from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { AppContext } from './Context/AppContext'

//styles
import { ThemeProvider } from 'styled-components'
import { Header, ButtonTheme } from './styles/styles'
import { lightTheme, darkTheme, GlobalStyle } from './styles/GlobalStyles'
import { MdLightMode, MdModeNight } from 'react-icons/md'

// rutas principales
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { NotRegister } from './pages/NotRegister'
import { Register } from './pages/Register'
import { User } from '././pages/User'
import { NotFound } from './pages/NotFound'

// componentes principales (Encabezado)
import { NavBar } from './components/NavBar'
import { Logo } from './components/Logo'

export const App = () => {
  // Context Global
  const { isAuth } = useContext(AppContext)

  // hook state theme selector
  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark'
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark'
    setTheme(updatedTheme)
    localStorage.setItem('theme', updatedTheme)
  }
  // hook theme selector
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    }
  }, [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div>
        <BrowserRouter>
          <GlobalStyle />
          <Header>
            <Logo />
            <ButtonTheme onClick={toggleTheme}>
              {isDarkTheme ? (
                <span aria-label="Light Mode" role="img">
                  <MdLightMode size="1.7rem" />
                </span>
              ) : (
                <span aria-label="Dark Mode" role="img">
                  <MdModeNight size="1.7rem" />
                </span>
              )}
            </ButtonTheme>
          </Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pet/:id" element={<Home />} />
            <Route exact path="/detail/:Id" element={<Detail />} />
            <Route
              exact
              path="/favs"
              element={isAuth ? <Favs /> : <NotRegister />}
            />
            <Route
              exact
              path="/user"
              element={isAuth ? <User /> : <Navigate replace to="/login" />}
            />
            <Route
              exact
              path="/login"
              element={!isAuth ? <NotRegister /> : <Navigate replace to="/" />}
            />
            <Route exact path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}
