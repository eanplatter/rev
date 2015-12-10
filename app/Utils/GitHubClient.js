import _ from 'lodash'
import axios from 'axios'

const URL = 'https://api.github.com'
const ORG = 'TechnologyAdvice'
const REPO_ENDPOINT = `${URL}/orgs/${ORG}/repos`
const PR_ENDPOINT = (repo) => `${URL}/repos/${ORG}/${repo}/pulls`
const ACCESS_TOKEN = __GITHUB_TOKEN__
const DEFAULT_PARAMS = {access_token: ACCESS_TOKEN}

function handleError(err) {
  console.log(err)
}

export function getRepos() {
  return axios.get(REPO_ENDPOINT, {params: DEFAULT_PARAMS})
    .then(({data}) => data)
    .catch(handleError)
}

export function getPRs(repo) {
  return axios.get(PR_ENDPOINT(repo), {params: DEFAULT_PARAMS})
    .then(({data}) => data)
    .catch(handleError)
}

export function getAllPRs() {
  return getRepos()
    .then(repos => {
      const promises = repos.map(({name}) => getPRs(name)
        .then(prs => prs)
      )

      return axios.all(promises)
        .then(prs => _.flatten(prs))
    })
    .catch(handleError)
}
