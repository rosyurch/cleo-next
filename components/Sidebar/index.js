import React from 'react'
import { connect } from 'react-redux'
import Nav from '../Nav'
import Profile from '../Profile'
import { Div, Button } from './styled'

const Sidebar = ({ userProfile, handleTheme, theme }) => (
  <Div>
    <Button onClick={() => handleTheme()}>{theme ? 'light' : 'dark'}</Button>
    <Nav />
    {userProfile.id && <Profile data={userProfile} />}
  </Div>
)

const mapState = state => ({
  userProfile: state.userProfile,
})

export default connect(mapState)(Sidebar)
