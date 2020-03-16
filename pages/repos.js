import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav/Nav'
import Repo from '../components/Repo'
import Input from '../components/generic/Input'
import Ul from '../components/generic/Ul'
import Flex from '../components/generic/Flex'

const Repos = ({ userName, userRepos, setUserRepos, defaultProfile }) => {
  const [sortByStars, setSortByStars] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!userRepos.length && userName) {
      setUserRepos(userName)
    } else if (defaultProfile) {
      setUserRepos(defaultProfile)
    }
  }, [])

  const sortedList = useMemo(
    () =>
      [...userRepos].sort((a, b) => b.stargazers_count - a.stargazers_count),
    [userRepos]
  )

  return (
    <>
      {userRepos ? (
        <>
          <Nav />
          <Flex
            py={20}
            flexDirection="column"
            alignItems="center"
            borderBottom="1px solid #fff"
          >
            <Input
              type="text"
              aria-label="search"
              onChange={e => setQuery(e.target.value.toLowerCase())}
            />
            <label>
              Sort by stars:
              <input type="checkbox" onChange={() => setSortByStars(s => !s)} />
            </label>
          </Flex>
        </>
      ) : (
        ''
      )}

      <Ul display="flex" flexWrap="wrap">
        {(sortByStars ? sortedList : userRepos)
          .filter(
            r =>
              r.name.toLowerCase().includes(query) ||
              (r.description && r.description.toLowerCase().includes(query)) ||
              (r.language && r.language.toLowerCase().includes(query))
          )
          .map(r => (
            <li key={r.id}>
              <Repo data={r} />
            </li>
          ))}
      </Ul>
    </>
  )
}

const mapStateToProps = state => ({
  userName: state.userProfile.login,
  userRepos: state.userRepos,
})

const mapDispatchToProps = dispatch => ({
  setUserRepos: dispatch.userRepos.getRepos,
})

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
