import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
`
export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 80px;
  width: 80px;
  outline: 3px solid white;
  outline-offset: -7px;
  padding: 4px;
  background: linear-gradient(45deg, rgb(255, 230, 0), rgb(255, 0, 128) 80%);
`
