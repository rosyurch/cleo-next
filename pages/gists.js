import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav';
import Gist from '../components/Gist';

function Gists({ userName, userGists, setGists }) {
    useEffect(() => {
        if (!userGists.length && userName) setGists(userName);
    }, []);

    return (
        <>
            <Nav />
            <ul>
                {userGists.map(g => (
                    <li key={g.id}>
                        <Gist data={g} />
                    </li>
                ))}
            </ul>
        </>
    );
}

const mapStateToProps = state => ({
    userName: state.userProfile.login,
    userGists: state.userGists,
});

const mapDispatchToProps = dispatch => ({
    setGists: user => dispatch.userGists.getGists(user),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gists);
