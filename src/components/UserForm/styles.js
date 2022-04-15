import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`
export const Form = styled.form`
  padding: 0.5rem;
`
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 1em 0.5em;
  width: 100%;
  text-align: center;
  color: #ff0080;
  font-size: 14px;
  font-weight: bold;
  &[disabled] {
    opacity: 0.5;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    text-align: center;
  }
  :-ms-input-placeholder {
    text-align: center;
  }
`
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
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  padding: 2rem 0;
`
export const Error = styled.span`
  padding-top: 1rem;
  font-size: 1rem;
  color: #ff0080;
`
