import React from 'react';

function Follower({ data }) {
    return (
        <div>
            <img src={data.avatar_url} width="150" height="150" />
            <a href={data.url}>
                <h3>{data.login}</h3>
            </a>
        </div>
    );
}

export default Follower;
