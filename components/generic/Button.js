import styled from 'styled-components'
import { space, border } from 'styled-system'

const Button = styled.button`
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    ${space}
    ${border}

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.bg};
    }
`

export default Button
