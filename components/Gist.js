import React from 'react';

function Gist({ data }) {
    return (
        <div>
            <ul>
                Files:{' '}
                {Object.entries(data.files).map(keyAndVal => (
                    <li key={keyAndVal[1].filename}>{keyAndVal[1].filename}</li>
                ))}
            </ul>
            <a href={data.url}>Gist Link</a>
        </div>
    );
}

export default Gist;
