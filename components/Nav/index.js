import React from 'react'
import Link from 'next/link'
import Nav from './styled'
import A from 'generic/A'

export default () => (
  <Nav>
    <Link href="/">
      <A>Home</A>
    </Link>
    <Link href="/github/repos">
      <A>Repos</A>
    </Link>
    <Link href="/github/followers">
      <A>Followers</A>
    </Link>
    <Link href="/github/gists">
      <A>Gists</A>
    </Link>
  </Nav>
)
