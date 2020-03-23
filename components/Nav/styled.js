import styled from 'styled-components'
import media from 'common/media'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  margin-left: 10px;
  padding-top: 10px;
  font-size: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bg};
  ${media.mobile`
    width:100%;
    text-align: center; 
    font-size: 1.5em;
    border:none;
  `}
`

export default Nav
