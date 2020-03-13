import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav/Nav';
import Repo from '../components/Repo';
import Form from '../components/generic/Form';
import Input from '../components/generic/Input';
import Ul from '../components/generic/Ul';
import Flex from '../components/generic/Flex';

function Repos({ userName, userRepos, setUserRepos }) {
    const [sortByStars, setSortByStars] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (!userRepos.length && userName) setUserRepos(userName);
    }, []);

    const sortedList = useMemo(() => {
        return [...userRepos].sort((a, b) => b.stargazers_count - a.stargazers_count);
    }, [userRepos]);

    return (
        <>
            <Nav />

            <Form>
                <Flex flexDirection="column" alignItems="center">
                    <Input type="text" aria-label="search" onChange={e => setQuery(e.target.value.toLowerCase())} />
                    <label>
                        Sort by stars:
                        <input type="checkbox" onChange={() => setSortByStars(s => !s)} />
                    </label>
                </Flex>
            </Form>

            <Ul display="flex" flexWrap="wrap">
                {(sortByStars ? sortedList : userRepos)
                    .filter(
                        r =>
                            r.name.toLowerCase().includes(query) ||
                            (r.description && r.description.toLowerCase().includes(query)) ||
                            (r.language && r.language.toLowerCase().includes(query))
                    )
                    .map(r => (
                        <li key={r.id}>
                            <Repo data={r} />
                        </li>
                    ))}
            </Ul>
        </>
    );
}

const mapStateToProps = state => ({
    userName: state.userProfile.login,
    userRepos: state.userRepos,
});

const mapDispatchToProps = dispatch => ({
    setUserRepos: user => dispatch.userRepos.getRepos(user),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
