import { init } from '@rematch/core'
import { userProfile } from 'models/profile'
import { userRepos } from 'models/repos'
import { userFollowers } from 'models/followers'
import { userGists } from 'models/gists'
import { isLoading } from 'models/isLoading'
import { darkTheme } from 'models/darkTheme'

const models = {
  userProfile,
  userRepos,
  userFollowers,
  userGists,
  isLoading,
  darkTheme,
}

const store = init({
  models,
})

export default store
