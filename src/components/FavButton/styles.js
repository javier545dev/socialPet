import styled from 'styled-components'

export const Button = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  padding: 1rem;
  & svg {
    margin-right: 4px;
  }
`
