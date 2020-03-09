export const userName = {
    state: '',
    reducers: {
        setName(payload) {
            return payload;
        },
    },
};

export const userProfile = {
    state: {},
    reducers: {
        setProfile(state, payload) {
            return payload;
        },
    },
    effects: {
        effects: dispatch => ({
            async setUsername(payload, rootState) {
                const responce = await fetch(
                    `https://api.github.com/users/${payload}`
                );
                const data = responce.json();
                dispatch.userProfile.setProfile(data);
            },
        }),
    },
};
