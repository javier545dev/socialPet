import React from 'react'
import { Link } from 'react-router-dom'
import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { useNearScreen } from '../../hooks/useScrollDetect'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
        </>
      )}
      <ToggleLikeMutation>
        {(toggleLike) => {
          const handleFavClic = () => {
            toggleLike({ variables: { input: { id } } })
          }
          return (
            <FavButton liked={liked} likes={likes} onClick={handleFavClic} />
          )
        }}
      </ToggleLikeMutation>
    </Article>
  )
}
