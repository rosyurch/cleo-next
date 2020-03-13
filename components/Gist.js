import React from 'react';

function Gist({ data }) {
    return (
        <div>
            <ul>
                Files:{' '}
                {Object.keys(data.files).map(fileName => (
                    <li key={fileName}>{fileName}</li>
                ))}
            </ul>
            <a href={data.url}>Gist Link</a>
        </div>
    );
}

export default Gist;
