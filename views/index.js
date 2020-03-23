import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Form from 'generic/Form'
import Input from 'generic/Input'
import Button from 'generic/Button'
import Loading from 'components/Loading'
import Div from 'generic/Div'

const Index = ({
  setProfile,
  userProfile,
  defaultProfile,
  isLoading,
  clearRepos,
  clearGists,
  clearFollowers,
}) => {
  const [name, setName] = useState('')
  const [searchName, setSearchName] = useState(
    userProfile.login || defaultProfile
  ) // keep current user when navigating back to this page

  const handleSubmit = e => {
    e.preventDefault()
    setSearchName(name)
  }

  useEffect(() => {
    if (searchName) {
      clearRepos()
      clearGists()
      clearFollowers()
      setProfile(searchName)
      localStorage.setItem('defaultProfile', searchName)
    }
  }, [searchName]) // eslint-disable-line react-hooks/exhaustive-deps

  const userNotFound = userProfile.message === 'Not Found'

  return (
    <Div width="100%">
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button type="submit" border="none" borderLeft="1px solid #000" p={10}>
          Get
        </Button>
      </Form>

      {isLoading && !userProfile.id && <Loading>Loading...</Loading>}

      {userNotFound && (
        <Div textAlign="center" color="coral" fontSize="1.5em">
          Couldn&apos;t find anybody
        </Div>
      )}
    </Div>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
  setProfile: dispatch.userProfile.getProfile,
  clearRepos: dispatch.userRepos.clearRepos,
  clearGists: dispatch.userGists.clearGists,
  clearFollowers: dispatch.userFollowers.clearFollowers,
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
