import React from 'react'
import Div from './generic/Div'

const Loading = props => (
  <Div textAlign="center" fontSize="5em" fontWeight="bold" py="20vh">
    <i>{props.children}</i>
  </Div>
)

export default Loading
