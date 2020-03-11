import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Profile from '../components/Profile';
import Nav from '../components/Nav';

let defaultProfile = '';
if (typeof window !== 'undefined') {
    // no 'window' on server
    defaultProfile = localStorage.getItem('defaultProfile');
}

function Index({ setProfile, userProfile }) {
    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState(userProfile.login || defaultProfile); // keep current user when navigating back to this page

    const handleSubmit = e => {
        e.preventDefault();

        setSearchName(name);
    };

    useEffect(() => {
        if (searchName) {
            setProfile(searchName);
            if (!localStorage.getItem('defaultProfile')) {
                localStorage.setItem('defaultProfile', searchName);
            }
        }
    }, [searchName]);

    return (
        <>
            <Nav />
            <form>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={handleSubmit}>Get</button>
            </form>
            {userProfile.id && <Profile data={userProfile} />}
        </>
    );
}

const mapStateToProps = state => ({
    userProfile: state.userProfile,
});

const mapDispatchToProps = dispatch => ({
    setUserName: userName => dispatch.userName.setUserName(userName),
    setProfile: user => dispatch.userProfile.getProfile(user),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
