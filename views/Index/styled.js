import styled from 'styled-components'
import media from 'common/media'

export const Wrap = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 30%;
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bg};
  ${media.mobile`
    margin-top: 0;
  `}
`
