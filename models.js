export const userProfile = {
    state: {},
    reducers: {
        setProfile(state, payload) {
            return payload;
        },
    },

    effects: dispatch => ({
        async getProfile(payload, rootState) {
            const responce = await fetch(`https://api.github.com/users/${payload}`);
            const data = await responce.json();
            dispatch.userProfile.setProfile(data);
        },
    }),
};

export const userRepos = {
    state: [],
    reducers: {
        setRepos(state, payload) {
            return payload;
        },
    },

    effects: dispatch => ({
        async getRepos(payload, rootState) {
            const responce = await fetch(`https://api.github.com/users/${payload}/repos`);
            const data = await responce.json();
            dispatch.userRepos.setRepos(data);
        },
    }),
};

export const userFollowers = {
    state: [],
    reducers: {
        setFollowers(state, payload) {
            return payload;
        },
    },

    effects: dispatch => ({
        async getFollowers(payload, rootState) {
            const responce = await fetch(`https://api.github.com/users/${payload}/followers`);
            const data = await responce.json();
            dispatch.userFollowers.setFollowers(data);
        },
    }),
};

export const userGists = {
    state: [],
    reducers: {
        setGists(state, payload) {
            return payload;
        },
    },

    effects: dispatch => ({
        async getGists(payload, rootState) {
            const responce = await fetch(`https://api.github.com/users/${payload}/gists`);
            const data = await responce.json();
            dispatch.userGists.setGists(data);
        },
    }),
};
