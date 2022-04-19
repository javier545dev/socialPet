import React from 'react'
import { createRoot } from 'react-dom/client'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { AppProvider } from './Context/AppContext'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://instapet-api-pink.vercel.app/graphql',
  request: (operation) => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
)
