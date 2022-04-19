import React, { useContext } from 'react'
import { Link } from './styles'
import { AppContext } from '../Context/AppContext'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const Register = () => {
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
      <Link to={'/login'}>Already registered? Login Now!</Link>
    </>
  )
}
