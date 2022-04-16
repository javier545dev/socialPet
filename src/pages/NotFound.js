import React from 'react'
import { Layout } from '../components/Layout'
import { Error } from '../components/Error'

export const NotFound = () => {
  return (
    <Layout title="Not Found">
      <Error />
    </Layout>
  )
}
