import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (error) {
      console.log(error)
    }
  })
  const element = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.log(error)
    }
  }

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
            !liked && toggleLike({ variables: { input: { id } } })
            setLiked(!liked)
          }
          return (
            <FavButton liked={liked} likes={likes} onClick={handleFavClic} />
          )
        }}
      </ToggleLikeMutation>
    </Article>
  )
}
