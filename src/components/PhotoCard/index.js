import React from 'react'
import { Link } from 'react-router-dom'
import { Article, ImgWrapper, Img, ContainerLikes } from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { useNearScreen } from '../../hooks/useScrollDetect'
import propTypes from 'prop-types'

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
            <ContainerLikes>
              <FavButton liked={liked} likes={likes} onClick={handleFavClic} />
            </ContainerLikes>
          )
        }}
      </ToggleLikeMutation>
    </Article>
  )
}

PhotoCard.propTypes = {
  id: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
