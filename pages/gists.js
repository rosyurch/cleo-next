import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav/Nav';
import Gist from '../components/Gist';

function Gists({ userName, userGists, setGists }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (!userGists.length && userName) setGists(userName);
    }, []);

    return (
        <>
            <Nav />
            <ul>
                <input type="text" aria-label="search" onChange={e => setQuery(e.target.value.toLowerCase())} />
                {userGists
                    .filter(g => {
                        // show  gist if one  of its file contains query term
                        return Object.keys(g.files).some(fileName => fileName.toLowerCase().includes(query));
                    })
                    .map(g => (
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
