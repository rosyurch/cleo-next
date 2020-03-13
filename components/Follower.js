import React from 'react';

import A from './generic/A';
import Div from './generic/Div';

function Follower({ data }) {
    return (
        <Div textAlign="center" m={20} borderBottom="1px solid #fff">
            <img src={data.avatar_url} width="150" height="150" />
            <A href={data.html_url}>
                <h3>{data.login}</h3>
            </A>
        </Div>
    );
}

export default Follower;
