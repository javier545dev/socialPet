import React from 'react'
import { useParams } from 'react-router-dom'
import { ListCategory } from '../components/ListCategory'
import { ListPhotoCard } from '../container/ListPhotoCard'

export const Home = () => {
  const params = useParams()
  return (
    <>
      <ListCategory />
      <ListPhotoCard categoryId={params.id} />
    </>
  )
}
