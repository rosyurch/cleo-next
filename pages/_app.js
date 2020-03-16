import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import store from '../store'
import { Provider } from 'react-redux'
import GlobalStyle from 'common/globalStyles'
import { theme } from 'common/theme'

let defaultProfile = ''
if (typeof window !== 'undefined') {
  // no 'window' on server
  defaultProfile = localStorage.getItem('defaultProfile')
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} defaultProfile={defaultProfile} />
        </ThemeProvider>
      </Provider>
    )
  }
}
