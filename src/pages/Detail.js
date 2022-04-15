import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardQuery } from '../container/PhotoCardQuery'

export const Detail = () => {
  const params = useParams()
  return <PhotoCardQuery id={params.Id} />
}
