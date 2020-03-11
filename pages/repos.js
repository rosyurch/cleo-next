import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav';
import Repo from '../components/Repo';

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
            <label>
                Sort by stars:
                <input type="checkbox" onChange={() => setSortByStars(s => !s)} />
            </label>
            <input type="text" aria-label="search" onChange={e => setQuery(e.target.value.toLowerCase())} />

            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
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
            </ul>
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
