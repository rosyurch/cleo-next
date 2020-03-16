import React from 'react'
import Link from 'next/link'
import Nav from './NavStyles'
import A from '../generic/A'

export default ({ showHomeOnly }) => (
  <Nav>
    <Link href="/">
      <A>Home</A>
    </Link>
    {showHomeOnly ? (
      ''
    ) : (
      <>
        <Link href="/repos">
          <A>Repos</A>
        </Link>
        <Link href="/followers">
          <A>Followers</A>
        </Link>
        <Link href="/gists">
          <A>Gists</A>
        </Link>
      </>
    )}
  </Nav>
)
