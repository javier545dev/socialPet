import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { UserForm } from '../components/UserForm'
import { LoginMutation } from '../container/LoginMutation'
import { Link } from './styles'

export const NotRegister = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMsg =
            error && 'Invalid email or password. Please try again.'
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Login"
              onSubmit={onSubmit}
            />
          )
        }}
      </LoginMutation>
      <Link to={'/register'}>Not register? Register Now!</Link>
    </>
  )
}
