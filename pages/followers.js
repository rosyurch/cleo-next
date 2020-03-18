import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Nav from 'components/Nav/Nav'
import Follower from 'components/Follower'
import Input from 'generic/Input'
import Ul from 'generic/Ul'
import Div from 'generic/Div'
import Loading from 'components/Loading'

const Followers = ({
  userName,
  userFollowers,
  setFollowers,
  defaultProfile,
  isLoading,
}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!userFollowers.length && userName) {
      setFollowers(userName)
    } else if (defaultProfile) {
      setFollowers(defaultProfile)
    }
  }, [setFollowers, defaultProfile, userName, userFollowers.length])

  const renderFollowers = (followersList, searchTerm) =>
    searchTerm
      ? followersList.filter(f => f.login.toLowerCase().includes(searchTerm))
      : followersList

  return (
    <>
      {userFollowers.length ? (
        <>
          <Nav />
          <Div textAlign="center" borderBottom="1px solid #fff" py={20}>
            <Input
              type="text"
              aria-label="search"
              onChange={e => setQuery(e.target.value.toLowerCase())}
            />
          </Div>
        </>
      ) : (
        <Nav showHomeOnly={true} />
      )}

      {isLoading && !userFollowers.length && <Loading>Loading...</Loading>}

      <Ul display="flex" flexWrap="wrap">
        {renderFollowers(userFollowers, query).map(f => (
          <li key={f.id}>
            <Follower data={f} />
          </li>
        ))}
      </Ul>
    </>
  )
}

const mapStateToProps = state => ({
  userName: state.userProfile.login,
  userFollowers: state.userFollowers,
  isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
  setFollowers: dispatch.userFollowers.getFollowers,
})

export default connect(mapStateToProps, mapDispatchToProps)(Followers)
