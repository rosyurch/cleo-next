import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import Nav from '../components/Nav/Nav'
import Form from '../components/generic/Form'
import Input from '../components/generic/Input'
import Button from '../components/generic/Button'

function Index({ setProfile, userProfile, defaultProfile }) {
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
      setProfile(searchName)
      if (!localStorage.getItem('defaultProfile')) {
        localStorage.setItem('defaultProfile', searchName)
      }
    }
  }, [searchName])

  return (
    <>
      <Nav />

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

      {userProfile.id && <Profile data={userProfile} />}
    </>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
})

const mapDispatchToProps = dispatch => ({
  setProfile: dispatch.userProfile.getProfile,
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
