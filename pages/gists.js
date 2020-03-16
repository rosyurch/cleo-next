import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav/Nav'
import Gist from '../components/Gist'
import Input from '../components/generic/Input'
import Div from '../components/generic/Div'
import Ul from '../components/generic/Ul'

const Gists = ({ userName, userGists, setGists, defaultProfile }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!userGists.length && userName) {
      setGists(userName)
    } else if (defaultProfile) {
      setGists(defaultProfile)
    }
  }, [])

  return (
    <>
      {userGists.length ? (
        <>
          <Nav />
          <Div textAlign="center" borderBottom="1px solid #fff" py={20}>
            <Input
              type="text"
              aria-label="search"
              mb={0}
              onChange={e => setQuery(e.target.value.toLowerCase())}
            />
          </Div>
        </>
      ) : (
        <Nav showHomeOnly={true} />
      )}

      <Ul display="flex" flexWrap="wrap">
        {userGists
          .filter(g =>
            Object.keys(g.files).some(fileName =>
              fileName.toLowerCase().includes(query)
            )
          )
          .map(g => (
            <li key={g.id}>
              <Gist data={g} />
            </li>
          ))}
      </Ul>
    </>
  )
}

const mapStateToProps = state => ({
  userName: state.userProfile.login,
  userGists: state.userGists,
})

const mapDispatchToProps = dispatch => ({
  setGists: dispatch.userGists.getGists,
})

export default connect(mapStateToProps, mapDispatchToProps)(Gists)
