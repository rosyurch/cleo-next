import styled from 'styled-components'
import media from 'common/media'

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  ${media.mobile`
    justify-content: center;
  `}
`
