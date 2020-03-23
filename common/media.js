import { css } from 'styled-components'

export const sizes = {
  tablet: 1024,
  mobile: 768,
}
// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export default media
