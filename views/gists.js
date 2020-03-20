import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Gist from 'components/Gist'
import Input from 'generic/Input'
import Div from 'generic/Div'
import Ul from 'generic/Ul'
import Loading from 'components/Loading'
import Flex from 'generic/Flex'
import Sidebar from 'components/Sidebar'

const Gists = ({
  userName,
  userProfile,
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
      // if (!localStorage.getItem('defaultProfile')) {
      //   localStorage.setItem('defaultProfile', userName)
      // }
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
    <Flex>
      <Sidebar userProfile={userProfile} />
      <Div width="100%">
        {userGists.length ? (
          <Div textAlign="center" borderBottom="1px solid #fff" py={20}>
            <Input
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
    </Flex>
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
