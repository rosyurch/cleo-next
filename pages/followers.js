import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav/Nav';
import Follower from '../components/Follower';
import Form from '../components/generic/Form';
import Input from '../components/generic/Input';
import Ul from '../components/generic/Ul';

function Followers({ userName, userFollowers, setFollowers }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (!userFollowers.length && userName) setFollowers(userName);
    }, []); // DON"T FORGET THAT [] !!!!!

    return (
        <>
            <Nav />

            <Form>
                <Input type="text" aria-label="search" onChange={e => setQuery(e.target.value.toLowerCase())} />
            </Form>

            <Ul display="flex" flexWrap="wrap">
                {userFollowers
                    .filter(f => f.login.toLowerCase().includes(query))
                    .map(f => (
                        <li key={f.id}>
                            <Follower data={f} />
                        </li>
                    ))}
            </Ul>
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
