import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from '../store';
import { Provider } from 'react-redux';

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}
