import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { lightTheme, darkTheme, GlobalStyle } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { Detail } from './pages/Detail'
import { Home } from '././pages/Home'
import { NavBar } from './components/NavBar'
import { Logo } from './components/Logo'
import { Header } from './styles/styles'

export const App = () => {
  // route parameters
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

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
            <button onClick={toggleTheme}>
              {isDarkTheme ? (
                <span aria-label="Light Mode" role="img">
                  🌞
                </span>
              ) : (
                <span aria-label="Dark Mode" role="img">
                  🌜
                </span>
              )}
            </button>
          </Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path="/pet/:id" element={<Home />} />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}
