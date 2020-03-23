import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        position: relative;
        min-height: 100vh;
        margin: 0;
        padding : 0 0 20px 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.primary};
        background-color:${({ theme }) => theme.colors.bg};
    }
`

export default GlobalStyle
