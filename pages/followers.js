import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav/Nav';
import Follower from '../components/Follower';

function Followers({ userName, userFollowers, setFollowers }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (!userFollowers.length && userName) setFollowers(userName);
    }, []); // DON"T FORGET THAT [] !!!!!

    return (
        <>
            <Nav />
            <input type="text" aria-label="search" onChange={e => setQuery(e.target.value.toLowerCase())} />
            <ul>
                {userFollowers
                    .filter(f => f.login.toLowerCase().includes(query))
                    .map(f => (
                        <li key={f.id}>
                            <Follower data={f} />
                        </li>
                    ))}
            </ul>
        </>
    );
}

const mapStateToProps = state => ({
    userName: state.userProfile.login,
    userFollowers: state.userFollowers,
});

const mapDispatchToProps = dispatch => ({
    setFollowers: user => dispatch.userFollowers.getFollowers(user),
});

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
