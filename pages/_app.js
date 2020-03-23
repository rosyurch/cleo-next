import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import store from 'common/store'
import { Provider } from 'react-redux'
import GlobalStyle from 'common/globalStyles'
import { dark, light } from 'common/theme'
import ErrorBoundary from 'components/ErrorBoundary'
import Sidebar from 'components/Sidebar'
import Flex from 'generic/Flex'
import Footer from 'components/Footer'

let defaultProfile = ''
if (typeof window !== 'undefined') {
  // no 'window' on server
  defaultProfile = localStorage.getItem('defaultProfile') || 'gaearon'
}

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(true)

  const handleTheme = () => {
    setTheme(s => !s)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme ? dark : light}>
        <GlobalStyle />
        <ErrorBoundary>
          <Flex flexWrap="wrap">
            <Sidebar handleTheme={handleTheme} theme={theme} />
            <Component {...pageProps} defaultProfile={defaultProfile} />
          </Flex>
          <Footer />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
