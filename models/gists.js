export const userGists = {
  state: [],
  reducers: {
    setGists: (state, payload) => payload,
  },

  effects: dispatch => ({
    async getGists(payload) {
      dispatch.isLoading.setIsLoading(true)
      const responce = await fetch(
        `https://api.github.com/users/${payload}/gists`
      )
      const data = await responce.json()
      dispatch.isLoading.setIsLoading(false)
      dispatch.userGists.setGists(data)
    },
  }),
}
