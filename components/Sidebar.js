import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav/Nav'
import Profile from './Profile'
import Div from 'generic/Div'

const Sidebar = ({ userProfile, setDarkTheme, darkTheme }) => (
  <Div
    borderRight="1px solid #fff"
    borderBottom="1px solid #fff"
    width={220}
    height="100%"
    pr={10}
    pb={10}
  >
    <button onClick={setDarkTheme}>{darkTheme ? 'Light' : 'Dark'}</button>
    <Nav />
    {userProfile.id && <Profile data={userProfile} />}
  </Div>
)

const mapStateToProps = state => ({
  darkTheme: state.darkTheme,
})

const mapDispatchToProps = dispatch => ({
  setDarkTheme: dispatch.darkTheme.setDarkTheme,
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
