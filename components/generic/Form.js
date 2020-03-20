import styled from 'styled-components'
import { typography } from 'styled-system'

const Form = styled.form`
  margin: 0 auto;
  margin-top: 30%;
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bg};
  ${typography}
`

export default Form
