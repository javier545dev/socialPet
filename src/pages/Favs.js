import React from 'react'
import { FavsQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout/index'

export const Favs = () => {
  return (
    <>
      <Layout
        title="Your Favorites"
        subtitle="here you can find your favorite pets"
      >
        <FavsQuery />
      </Layout>
    </>
  )
}
