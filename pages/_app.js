import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from '../store';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding : 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.primary};
        background-color:${({ theme }) => theme.colors.bg};
    }
`;

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}
