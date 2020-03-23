import React from 'react'
import A from '../generic/A'
import Div from '../generic/Div'

const Follower = ({ data }) => {
  const { avatar_url, html_url, login } = data
  return (
    <Div textAlign="center" m={10} borderBottom="1px solid #fff">
      <img src={avatar_url} width="150" height="150" />
      <A href={html_url}>
        <h3>{login}</h3>
      </A>
    </Div>
  )
}

export default Follower
