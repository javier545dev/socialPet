import styled from 'styled-components'

export const Button = styled.button`
  background: #ff0080;
  border-radius: 10px;
  color: #fff;
  height: 2.5rem;
  width: 100%;
  &[disabled] {
    opacity: 0.5;
  }
`
