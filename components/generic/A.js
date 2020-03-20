import styled from 'styled-components'

const A = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  padding-bottom: 5px;
  font-size: 1.2em;
`

export default A
