export const userRepos = {
  state: [],
  reducers: {
    setRepos: (state, payload) => payload,
  },

  effects: dispatch => ({
    async getRepos(payload) {
      dispatch.isLoading.setIsLoading(true)
      const responce = await fetch(
        `https://api.github.com/users/${payload}/repos`
      )
      const data = await responce.json()
      dispatch.isLoading.setIsLoading(false)
      dispatch.userRepos.setRepos(data)
    },
  }),
}
