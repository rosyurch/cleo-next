import styled from 'styled-components'
import { space, border, layout } from 'styled-system'

const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.colors.bg};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  width: 300px;
  ${space};
  ${border};
  ${layout};
`

export default Input
