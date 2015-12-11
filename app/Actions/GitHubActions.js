import _ from 'lodash'
import Omicron, {action} from 'omicron'
import keymirror from 'keymirror'
import * as GitHubClient from 'app/Utils/GitHubClient'

const ACTIONS = keymirror({
  GET_PRS: '',
  GET_REPOS: '',
})

export function getPRs(repo) {
  GitHubClient.getPRs(repo)
    .then(res => {
      action(ACTIONS.GET_PRS, store => ({prs: [res]}))
    })
}

export function getRepos(repo) {
  GitHubClient.getRepos(repo)
    .then(res => {
      action(ACTIONS.GET_REPOS, store => ({repos: [...store.repos, ...res]}))
    })
}

export function getAllPRs(repo) {
  GitHubClient.getAllPRs(repo)
    .then(res => {
      action(ACTIONS.GET_REPOS, store => ({prs: res}))
    })
}
