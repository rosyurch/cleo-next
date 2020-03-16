export const userProfile = {
  state: {},
  reducers: {
    setProfile: (state, payload) => payload,
  },

  effects: dispatch => ({
    async getProfile(payload) {
      dispatch.isLoading.setIsLoading(true)
      const responce = await fetch(`https://api.github.com/users/${payload}`)
      const data = await responce.json()
      dispatch.isLoading.setIsLoading(false)
      dispatch.userProfile.setProfile(data)
    },
  }),
}
