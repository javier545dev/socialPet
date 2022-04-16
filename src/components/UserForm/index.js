import React from 'react'
import { Div, Form, Input, Title, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { ButtonSubmit } from '../ButtonSubmit'

export const UserForm = ({ onSubmit, title, disabled, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <Div>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          placeholder="Email"
          type="email"
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <ButtonSubmit disabled={disabled}>{title}</ButtonSubmit>
      </Form>
      {error && <Error>{error}</Error>}
    </Div>
  )
}
