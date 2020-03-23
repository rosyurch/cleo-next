import React from 'react'
import styled from 'styled-components'

const F = styled.footer`
  position: absolute;
  left: 50%;
  bottom: 0;
  text-align: center;
  padding: 15px 0;
`

const Footer = () => <F>&copy; me</F>

export default Footer
