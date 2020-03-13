import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav/Nav';
import Gist from '../components/Gist';
import Input from '../components/generic/Input';
import Form from '../components/generic/Form';
import Ul from '../components/generic/Ul';

function Gists({ userName, userGists, setGists }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (!userGists.length && userName) setGists(userName);
    }, []);

    return (
        <>
            <Nav />

            <Form textAlign="center">
                <Input type="text" aria-label="search" mb={0} onChange={e => setQuery(e.target.value.toLowerCase())} />
            </Form>

            <Ul display="flex" flexWrap="wrap">
                {userGists
                    .filter(g => {
                        // show  gist if one  of its files contains query term
                        return Object.keys(g.files).some(fileName => fileName.toLowerCase().includes(query));
                    })
                    .map(g => (
                        <li key={g.id}>
                            <Gist data={g} />
                        </li>
                    ))}
            </Ul>
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
