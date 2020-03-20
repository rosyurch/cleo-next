import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Form from 'generic/Form'
import Input from 'generic/Input'
import Button from 'generic/Button'
import Loading from 'components/Loading'
import Div from 'generic/Div'
import Sidebar from 'components/Sidebar'
import Flex from 'generic/Flex'

const Index = ({ setProfile, userProfile, defaultProfile, isLoading }) => {
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
  }, [searchName]) // eslint-disable-line react-hooks/exhaustive-deps

  const userNotFound = userProfile.message === 'Not Found'

  // const x = 5
  // x = 3 // triggers error

  return (
    <Flex>
      <Sidebar userProfile={userProfile} />
      <Div width="100%">
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button
            type="submit"
            border="none"
            borderLeft="1px solid #000"
            p={10}
          >
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
    </Flex>
  )
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
  setProfile: dispatch.userProfile.getProfile,
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
