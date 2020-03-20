import React from 'react'
import Nav from './Nav/Nav'
import Profile from './Profile'
import Div from 'generic/Div'

const Sidebar = ({ userProfile }) => (
  <Div
    borderRight="1px solid #fff"
    borderBottom="1px solid #fff"
    width={220}
    height="100%"
    pr={10}
    pb={10}
  >
    <Nav />
    {userProfile.id && <Profile data={userProfile} />}
  </Div>
)

export default Sidebar
