import styled from 'styled-components'
import media from 'common/media'

export const Button = styled.button`
  text-transform: capitalize;
  ${media.mobile`
    padding: 10px;
    font-size: 1.3em;
  `};
`

export const Div = styled.div`
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  width: 220px;
  height: 100%;
  padding-right: 10px;
  padding-left: 10px;
  ${media.mobile`
    width: 85%;
    margin: 0 auto;
    border-right: none;
  `}
`
