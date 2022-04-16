import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Layout } from '../components/Layout'
import { Profile } from '../components/Profile'
import { ButtonSubmit } from '../components/ButtonSubmit'

export const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <Layout title="My Profile" subtitle="Here you can find your profile">
      <Profile />
      <ButtonSubmit onClick={removeAuth}>Logout</ButtonSubmit>
    </Layout>
  )
}
