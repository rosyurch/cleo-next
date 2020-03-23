import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import store from 'common/store'
import { Provider } from 'react-redux'
import GlobalStyle from 'common/globalStyles'
import { dark, light } from 'common/theme'
import ErrorBoundary from 'components/ErrorBoundary'
import Sidebar from 'components/Sidebar'
import Flex from 'generic/Flex'

let defaultProfile = ''
if (typeof window !== 'undefined') {
  // no 'window' on server
  defaultProfile = localStorage.getItem('defaultProfile')
}

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(true)
  // const theme = store.getState().darkTheme ? dark : light

  const handleTheme = () => {
    setTheme(s => !s)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme ? dark : light}>
        <GlobalStyle />
        <ErrorBoundary>
          <Flex>
            <Sidebar handleTheme={handleTheme} theme={theme} />
            <Component {...pageProps} defaultProfile={defaultProfile} />
          </Flex>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
