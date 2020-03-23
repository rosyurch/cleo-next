import React from 'react'
import { Div } from './styled'
import A from 'generic/A'

const Repo = ({ data }) => {
  const { name, language, description, stargazers_count, html_url } = data
  return (
    <Div>
      <h3>{name}</h3>
      {language && <span>Language: {language}</span>}
      {description && <p>{description}</p>}
      <div>Stars: {stargazers_count}</div>
      <A href={html_url}>Link</A>
    </Div>
  )
}

export default Repo
