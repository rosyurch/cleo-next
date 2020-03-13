import React from 'react';

import Div from './generic/Div';
import A from './generic/A';

function Repo({ data }) {
    return (
        <Div width={200} minHeight={180} border="1px solid #fff" borderRadius={10} p={10} pt={0} m={10}>
            <h3>{data.name}</h3>
            {data.language && <span>Language: {data.language}</span>}
            {data.description && <p>{data.description}</p>}
            <div>Stars: {data.stargazers_count}</div>
            <A href={data.html_url}>Link</A>
        </Div>
    );
}

export default Repo;
