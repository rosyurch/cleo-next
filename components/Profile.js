import React from 'react'
import Flex from 'generic/Flex'
import Div from 'generic/Div'
import A from 'generic/A'
import H1 from 'generic/H1'

const Profile = ({ data }) => {
  const {
    avatar_url,
    name,
    login,
    location,
    bio,
    email,
    followers,
    following,
    public_repos,
    public_gists,
    html_url,
  } = data

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <img src={avatar_url} width="200" height="200" />
      <Div maxWidth={400} pl={20}>
        <H1 my={0}>{name}</H1>
        <div>Login: {login}</div>
        {location && <div>Location: {location}</div>}
        {bio && <div>Bio: {bio}</div>}
        {email && <div>Message: {email}</div>}

        {followers ? <div>Followers: {followers}</div> : ''}
        {/* `0 && smth` is rendered by react */}
        {following ? <div>Following: {following}</div> : ''}

        {public_repos ? <div>Repos: {public_repos}</div> : ''}
        {public_gists ? <div>Gists: {public_gists}</div> : ''}
        <A href={html_url}>Link</A>
      </Div>
    </Flex>
  )
}

export default Profile
