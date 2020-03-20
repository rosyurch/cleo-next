import React from 'react'
import Link from 'next/link'
import A from 'generic/A'
import Div from 'generic/Div'

export default function Custom404() {
  return (
    <Div textAlign="center" pt="20%">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <A fontSize="2em" fontWeight={500} color="lightgreen">
          &#8594;Go back Home, this place is scary
        </A>
      </Link>
    </Div>
  )
}
