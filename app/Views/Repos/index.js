import _ from 'lodash'
import React, {Component} from 'react'
import Omicron from 'omicron'

import Repo from 'app/Components/Repo'
import PR from 'app/Components/PR'

const DecoratedRepos = Omicron(
  class Repos extends Component {
    render() {
      const repoCards = _.map(this.store.repos, repo => {
        return <Repo repo={repo} key={repo.name} />
      })

      return (
        <div className="ui two cards">
          {repoCards}
        </div>
      )
    }
  }
)

export default DecoratedRepos
