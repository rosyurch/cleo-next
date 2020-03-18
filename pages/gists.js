import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Nav from 'components/Nav/Nav'
import Gist from 'components/Gist'
import Input from 'generic/Input'
import Div from 'generic/Div'
import Ul from 'generic/Ul'
import Loading from 'components/Loading'

const Gists = ({
  userName,
  userGists,
  setGists,
  defaultProfile,
  isLoading,
}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!userGists.length && userName) {
      setGists(userName)
    } else if (defaultProfile && !userGists.length) {
      setGists(defaultProfile)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const renderGists = (gistList, searchTerm) =>
    searchTerm
      ? gistList.filter(g =>
          Object.keys(g.files).some(fileName =>
            fileName.toLowerCase().includes(searchTerm)
          )
        )
      : gistList

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

      {isLoading && !userGists.length && <Loading>Loading...</Loading>}

      <Ul display="flex" flexWrap="wrap">
        {renderGists(userGists, query).map(g => (
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
  isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
  setGists: dispatch.userGists.getGists,
})

export default connect(mapStateToProps, mapDispatchToProps)(Gists)
