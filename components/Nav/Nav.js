import React from 'react';
import Link from 'next/link';

import Nav from './NavStyles';
import A from '../generic/A';

export default () => (
    <Nav>
        <Link href="/">
            <A>Home</A>
        </Link>
        <Link href="/repos">
            <A>Repos</A>
        </Link>
        <Link href="/followers">
            <A>Followers</A>
        </Link>
        <Link href="/gists">
            <A>Gists</A>
        </Link>
    </Nav>
);
