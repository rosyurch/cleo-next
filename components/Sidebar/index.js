import React from 'react'
import { connect } from 'react-redux'
import Nav from '../Nav'
import Profile from '../Profile'
import Div from 'generic/Div'

const Sidebar = ({ userProfile, handleTheme, theme }) => (
  <Div
    borderRight="1px solid #fff"
    borderBottom="1px solid #fff"
    width={220}
    height="100%"
    pr={10}
    pb={10}
  >
    <button onClick={() => handleTheme()}>{theme ? 'light' : 'dark'}</button>
    <Nav />
    {userProfile.id && <Profile data={userProfile} />}
  </Div>
)

const mapState = state => ({
  userProfile: state.userProfile,
})

export default connect(mapState)(Sidebar)
