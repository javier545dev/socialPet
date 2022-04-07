import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from 'react-apollo'
import { getPhoto } from '../hoc/Get_Query'

const RenderProps = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardQuery = ({ id }) => (
  <Query query={getPhoto} variables={{ id }}>
    {RenderProps}
  </Query>
)
