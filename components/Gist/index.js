import React from 'react'
import A from '../generic/A'
import Div from '../generic/Div'
import Ul from '../generic/Ul'

const Gist = ({ data }) => {
  const { files, html_url } = data
  return (
    <Div border="1px solid #fff" borderRadius={10} m={10} p={10}>
      <Ul>
        {Object.keys(files).map(fileName => (
          <li key={fileName}>{fileName}</li>
        ))}
      </Ul>
      <A href={html_url}>Gist Link</A>
    </Div>
  )
}

export default Gist
