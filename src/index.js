import React from 'react'
import { createRoot } from 'react-dom/client'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://instalog-dev.vercel.app/graphql'
})
const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
