import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Follower from 'components/Follower'
import Input from 'generic/Input'
import { Ul } from './styled'
import Div from 'generic/Div'
import Loading from 'components/Loading'

const Followers = ({
  userName,
  userFollowers,
  setFollowers,
  defaultProfile,
  isLoading,
  setProfile,
}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!userFollowers.length && userName) {
      setFollowers(userName)
    } else if (defaultProfile && !userFollowers.length) {
      setFollowers(defaultProfile)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // get profile data
  useEffect(() => {
    if (!userName) {
      setProfile(defaultProfile)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const renderFollowers = (followersList, searchTerm) =>
    searchTerm
      ? followersList.filter(f => f.login.toLowerCase().includes(searchTerm))
      : followersList

  return (
    <Div width="70%" mx="auto">
      {userFollowers.length ? (
        <Div textAlign="center" borderBottom="1px solid #fff" py={20}>
          <Input
            width="auto"
            type="text"
            aria-label="search"
            onChange={e => setQuery(e.target.value.toLowerCase())}
          />
        </Div>
      ) : null}

      {isLoading && !userFollowers.length && <Loading>Loading...</Loading>}

      <Ul display="flex" flexWrap="wrap">
        {renderFollowers(userFollowers, query).map(f => (
          <li key={f.id}>
            <Follower data={f} />
          </li>
        ))}
      </Ul>
    </Div>
  )
}

const mapStateToProps = state => ({
  userName: state.userProfile.login,
  userFollowers: state.userFollowers,
  isLoading: state.isLoading,
  userProfile: state.userProfile,
})

const mapDispatchToProps = dispatch => ({
  setFollowers: dispatch.userFollowers.getFollowers,
  setProfile: dispatch.userProfile.getProfile,
})

export default connect(mapStateToProps, mapDispatchToProps)(Followers)
