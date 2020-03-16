export const userProfile = {
    state: {},
    reducers: {
        setProfile(state, payload) {
            return payload
        },
    },

    effects: dispatch => ({
        async getProfile(payload) {
            const responce = await fetch(`https://api.github.com/users/${payload}`)
            const data = await responce.json()
            dispatch.userProfile.setProfile(data)
        },
    }),
}
