import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center;
  background: ${({ theme }) => theme.body};
  border-top: 1px solid ${({ theme }) => theme.text};
  bottom: 0;
  display: flex;
  height: 60px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: ${({ theme }) => theme.text};
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: ${({ theme }) => theme.text};

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '.';
      position: absolute;
      bottom: 10px;
      font-size: 50px;
      line-height: 30px;
    }
  }
`
