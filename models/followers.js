export const userFollowers = {
  state: [],
  reducers: {
    setFollowers: (state, payload) => payload,
  },

  effects: dispatch => ({
    async getFollowers(payload) {
      dispatch.isLoading.setIsLoading(true)
      const responce = await fetch(
        `https://api.github.com/users/${payload}/followers`
      )
      const data = await responce.json()
      dispatch.isLoading.setIsLoading(false)
      dispatch.userFollowers.setFollowers(data)
    },
  }),
}
