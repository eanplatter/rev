import _ from 'lodash'
import React, {Component} from 'react'
import Omicron from 'omicron'

import PR from 'app/Components/PR'

const DecoratedPRs = Omicron(
  class PRs extends Component {
    render() {
      const prCards = _.map(this.store.prs, pr => {
        return <PR pr={pr} key={pr.id} />
      })

      return (
        <div className="ui two cards">
          {prCards}
        </div>
      )
    }
  }
)

export default DecoratedPRs
