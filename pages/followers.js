import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav/Nav'
import Follower from '../components/Follower'
import Input from '../components/generic/Input'
import Ul from '../components/generic/Ul'
import Div from '../components/generic/Div'

const Followers = ({
  userName,
  userFollowers,
  setFollowers,
  defaultProfile,
}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!userFollowers.length && userName) {
      setFollowers(userName)
    } else if (defaultProfile) {
      setFollowers(defaultProfile)
    }
  }, []) // DON"T FORGET THAT [] !!!!!

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

      <Ul display="flex" flexWrap="wrap">
        {userFollowers
          .filter(f => f.login.toLowerCase().includes(query))
          .map(f => (
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
})

const mapDispatchToProps = dispatch => ({
  setFollowers: dispatch.userFollowers.getFollowers,
})

export default connect(mapStateToProps, mapDispatchToProps)(Followers)
