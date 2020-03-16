import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import Nav from 'components/Nav/Nav'
import Repo from 'components/Repo'
import Input from 'generic/Input'
import Ul from 'generic/Ul'
import Flex from 'generic/Flex'
import Loading from 'components/Loading'

const Repos = ({
  userName,
  userRepos,
  setUserRepos,
  defaultProfile,
  isLoading,
  setRepos,
}) => {
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

  const searchHandler = e => {
    setQuery(e.target.value.toLowerCase())
    // const query = e.target.value.toLowerCase()
    // const filtered = userRepos.filter(
    //   r =>
    //     r.name.toLowerCase().includes(query) ||
    //     (r.description && r.description.toLowerCase().includes(query)) ||
    //     (r.language && r.language.toLowerCase().includes(query))
    // )
    // setRepos(filtered)
  }

  return (
    <>
      {userRepos.length ? (
        <>
          <Nav />
          <Flex
            py={20}
            flexDirection="column"
            alignItems="center"
            borderBottom="1px solid #fff"
          >
            <Input type="text" aria-label="search" onChange={searchHandler} />
            <label>
              Sort by stars:
              <input type="checkbox" onChange={() => setSortByStars(s => !s)} />
            </label>
          </Flex>
        </>
      ) : (
        <>
          <Nav showHomeOnly={true} />
        </>
      )}

      {isLoading && !userRepos.length && <Loading>Loading...</Loading>}

      <Ul display="flex" flexWrap="wrap">
        {(sortByStars ? sortedList : userRepos)
          .filter(r =>
            query
              ? r.name.toLowerCase().includes(query) ||
                (r.description &&
                  r.description.toLowerCase().includes(query)) ||
                (r.language && r.language.toLowerCase().includes(query))
              : r
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
  isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
  setUserRepos: dispatch.userRepos.getRepos, // api call
  setRepos: dispatch.userRepos.setRepos,
})

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
