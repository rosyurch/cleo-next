import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
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
  setProfile,
}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!userGists.length && userName) {
      setGists(userName)
    } else if (defaultProfile && !userGists.length) {
      setGists(defaultProfile)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // get profile data
  useEffect(() => {
    if (!userName) {
      setProfile(defaultProfile)
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
    <Div width="70%" mx="auto">
      {userGists.length ? (
        <Div textAlign="center" borderBottom="1px solid #fff" py={20}>
          <Input
            width="auto"
            type="text"
            aria-label="search"
            mb={0}
            onChange={e => setQuery(e.target.value.toLowerCase())}
          />
        </Div>
      ) : null}

      {isLoading && !userGists.length && <Loading>Loading...</Loading>}

      <Ul display="flex" flexWrap="wrap">
        {renderGists(userGists, query).map(g => (
          <li key={g.id}>
            <Gist data={g} />
          </li>
        ))}
      </Ul>
    </Div>
  )
}

const mapStateToProps = state => ({
  userName: state.userProfile.login,
  userProfile: state.userProfile,
  userGists: state.userGists,
  isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
  setGists: dispatch.userGists.getGists,
  setProfile: dispatch.userProfile.getProfile,
})

export default connect(mapStateToProps, mapDispatchToProps)(Gists)
