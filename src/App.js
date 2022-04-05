import React from 'react'
import { ListCategory } from './components/ListCategory'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListPhotoCard } from './components/ListPhotoCard'
import { Logo } from './components/Logo'
export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListCategory />
    <ListPhotoCard />
  </div>
)
