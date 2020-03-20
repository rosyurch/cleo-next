import React from 'react'
import { ThemeProvider } from 'styled-components'
import store from 'common/store'
import { Provider } from 'react-redux'
import GlobalStyle from 'common/globalStyles'
import { dark, light } from 'common/theme'
import ErrorBoundary from 'components/ErrorBoundary'

let defaultProfile = ''
if (typeof window !== 'undefined') {
  // no 'window' on server
  defaultProfile = localStorage.getItem('defaultProfile')
}

const MyApp = ({ Component, pageProps }) => {
  const theme = store.getState().darkTheme ? dark : light

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Component {...pageProps} defaultProfile={defaultProfile} />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
