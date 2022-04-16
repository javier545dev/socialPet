import styled from 'styled-components'

export const Div = styled.div`
  padding: 0.5rem;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 3rem;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`
export const Subtitle = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`
