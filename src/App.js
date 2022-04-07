import React, { useState, useEffect } from 'react'
import { lightTheme, darkTheme, GlobalStyle } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { ListCategory } from './components/ListCategory'
import { ListPhotoCard } from './container/ListPhotoCard'
import { PhotoCardQuery } from './container/PhotoCardQuery'
import { Logo } from './components/Logo'
import { Header } from './styles/styles'

export const App = () => {
  // route parameters
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

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
        {detailId ? (
          <PhotoCardQuery id={detailId} />
        ) : (
          <>
            <ListCategory />
            <ListPhotoCard categoryId={2} />
          </>
        )}
      </div>
    </ThemeProvider>
  )
}
