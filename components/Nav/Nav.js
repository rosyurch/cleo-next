import React from 'react'
import Link from 'next/link'
import Nav from './NavStyles'
import A from 'generic/A'

export default ({ showHomeOnly }) => (
  <Nav>
    <Link href="/">
      <A>Home</A>
    </Link>
    {showHomeOnly ? null : (
      <>
        <Link href="/github/repos">
          <A>Repos</A>
        </Link>
        <Link href="/github/followers">
          <A>Followers</A>
        </Link>
        <Link href="/github/gists">
          <A>Gists</A>
        </Link>
      </>
    )}
  </Nav>
)
