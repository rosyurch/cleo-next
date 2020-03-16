export const userRepos = {
  state: [],
  reducers: {
    setRepos: (state, payload) => payload,
  },

  effects: dispatch => ({
    async getRepos(payload) {
      const responce = await fetch(
        `https://api.github.com/users/${payload}/repos`
      )
      const data = await responce.json()
      dispatch.userRepos.setRepos(data)
    },
  }),
}
