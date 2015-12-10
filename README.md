# rev
Test run of Omicron

## Setup
Add a `.env` file with a GitHub [personal access token](https://github.com/settings/tokens/new), to avoid rate limits.
```
GITHUB_TOKEN=<your token>
```

## Goals

- [ ] globalized loading states for api requests
- [ ] loading some http resource and track its progress across multiple views
- [ ] notifications based on action success/error 


### Notes

#### Not knowing where the data will mount in the store
After calling an action, there is no indication from within component where the state will mount

#### Solve multiple request issue with flux
When multiple components send the same action, say getUsers, the:
- action fetches users twice
- result is dispatched twice
- store is updated twice
- subscribed components are updated twice
 
Need a caching layer
