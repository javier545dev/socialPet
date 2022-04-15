import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegister = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <>
      <RegisterMutation>
        {(register, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }
          const errorMsg = error && 'User already exists'
          return (
            <UserForm
              title="Register"
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
            />
          )
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMsg = error && 'Invalid email or password'
          return (
            <UserForm
              title="Login"
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
            />
          )
        }}
      </LoginMutation>
    </>
  )
}
