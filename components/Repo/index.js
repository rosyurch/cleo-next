import React from 'react'
import Div from '../generic/Div'
import A from '../generic/A'

const Repo = ({ data }) => {
  const { name, language, description, stargazers_count, html_url } = data
  return (
    <Div
      width={200}
      minHeight={180}
      border="1px solid #fff"
      borderRadius={10}
      p={10}
      pt={0}
      m={10}
    >
      <h3>{name}</h3>
      {language && <span>Language: {language}</span>}
      {description && <p>{description}</p>}
      <div>Stars: {stargazers_count}</div>
      <A href={html_url}>Link</A>
    </Div>
  )
}

export default Repo
