import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  padding-bottom: 1rem;
  overflow: scroll;
  width: 100%;
  padding-left: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -10px;
      transform: scale(0.7);
      z-index: 1;
    `}
`

export const Item = styled.li`
  ${fadeIn()};
  padding: 0 8px;
`
