import styled from 'styled-components'
import media from 'common/media'

const Div = styled.div`
  margin: 10 10 0 0;
  padding: 10px;
  width: 200px;
  text-align: start;
  ${media.mobile`
    width: 100%;
    text-align: center;
  `}
`

export default Div
