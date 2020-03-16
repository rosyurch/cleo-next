export const userGists = {
    state: [],
    reducers: {
        setGists(state, payload) {
            return payload
        },
    },

    effects: dispatch => ({
        async getGists(payload) {
            const responce = await fetch(`https://api.github.com/users/${payload}/gists`)
            const data = await responce.json()
            dispatch.userGists.setGists(data)
        },
    }),
}
