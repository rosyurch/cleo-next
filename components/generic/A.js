import styled from 'styled-components'
import { typography, color } from 'styled-system'

const A = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  padding-bottom: 5px;
  font-size: 1.2em;
  ${typography}
  ${color}
`

export default A
