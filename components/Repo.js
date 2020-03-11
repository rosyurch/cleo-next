import React from 'react';

function Repo({ data }) {
    return (
        <div style={{ width: '200px' }}>
            <h3>{data.name}</h3>
            {data.language && <span>Language: {data.language}</span>}
            {data.description && <p>{data.description}</p>}
            <div>Stars: {data.stargazers_count}</div>
            <a href={data.url}>Link</a>
        </div>
    );
}

export default Repo;
