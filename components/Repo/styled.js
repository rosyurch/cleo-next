import styled from 'styled-components'
import media from 'common/media'

export const Div = styled.div`
  width: 200px;
  min-height: 180px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px;
  padding-top: 0;
  margin: 10px;
  ${media.mobile`
    margin: 5px ;
    width: 90%;
    min-width: 200px;
    text-align:center;
    min-height: unset;
  `}
`
