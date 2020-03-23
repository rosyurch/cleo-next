import { init } from '@rematch/core'
import { userProfile } from 'models/profile'
import { userRepos } from 'models/repos'
import { userFollowers } from 'models/followers'
import { userGists } from 'models/gists'
import { isLoading } from 'models/isLoading'

const models = {
  userProfile,
  userRepos,
  userFollowers,
  userGists,
  isLoading,
}

const store = init({
  models,
})

export default store
