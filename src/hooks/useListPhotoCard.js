import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from './style.js'

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const ListOfPhotoCard = () => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId: 1 } //TODO: Enviar dinamicamente
  })

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <>
      <List>
        {data.photos.map((photoCard) => (
          <Item key={photoCard.id}>
            <PhotoCard {...photoCard} />
          </Item>
        ))}
      </List>
    </>
  )
}
