import React from 'react';

function Profile({ data }) {
    return (
        <div>
            <img src={data.avatar_url} width="200" height="200" />
            <div>
                <h1>{data.name}</h1>
                <div>Login: {data.login}</div>
                {data.location && <div>Location: {data.location}</div>}
                {data.bio && <div>Bio: {data.bio}</div>}
                {data.email && <div>Message: {data.email}</div>}

                {data.followers ? <div>Followers: {data.followers}</div> : ''}
                {/* 0 is rendered by react */}
                {data.following ? <div>Following: {data.following}</div> : ''}

                {data.public_repos ? <div>Repos: {data.public_repos}</div> : ''}
                {data.public_gists ? <div>Gists: {data.public_gists}</div> : ''}
                <a href={data.url}>Link</a>
            </div>
        </div>
    );
}

export default Profile;
