import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardQuery } from '../container/PhotoCardQuery'
import { Layout } from '../components/Layout'

export const Detail = () => {
  const params = useParams()
  return (
    <Layout title={`Photo ${params.Id}`}>
      <PhotoCardQuery id={params.Id} />
    </Layout>
  )
}
