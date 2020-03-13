import React from 'react';

import A from './generic/A';
import Div from './generic/Div';
import Ul from './generic/Ul';

function Gist({ data }) {
    return (
        <Div border="1px solid #fff" borderRadius={10} m={10} p={10}>
            <Ul>
                {Object.keys(data.files).map(fileName => (
                    <li key={fileName}>{fileName}</li>
                ))}
            </Ul>
            <A href={data.html_url}>Gist Link</A>
        </Div>
    );
}

export default Gist;
