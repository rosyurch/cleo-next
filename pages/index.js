import React, { useState } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav';

function Index() {
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <>
            <Nav />
            <form>
                <input type="text" onChange={e => setName(e.target.value)} />
                <button onClick={handleSubmit}>Get</button>
            </form>
        </>
    );
}

const mapState = state => {
    userName: state.userName;
};

const mapDispatch = dispatch => {
    setName: userName => dispatch.userName.setName(userName);
};

export default Index;
