import React from 'react'
import { useParams } from 'react-router-dom'
import { ListCategory } from '../components/ListCategory'
import { ListPhotoCard } from '../container/ListPhotoCard'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  const params = useParams()
  return (
    <>
      <Helmet>
        <title>InstaPet - You App from Pets</title>
        <meta
          name="description"
          content="With InstaPet can search photo of beautiful Pets"
        />
      </Helmet>
      <ListCategory />
      <ListPhotoCard categoryId={params.id} />
    </>
  )
}
export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.params === props.params
})
