import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: space-around;
`;

const A = styled.a`
    color: lightblue;
    cursor: pointer;
`;

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
