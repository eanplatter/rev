import React, {Component} from 'react'
import * as GitHubActions from 'app/Actions/GitHubActions'
import Omicron from 'omicron'

const DecoratedRepo = Omicron(
  class Repo extends Component {
    render() {
      const prs = _.filter(this.store.prs, pr => (
          pr.head.repo.id === this.props.repo.id
        ))
        .map(pr => (
          <div key={pr.title} className="item">
            <i className="fork icon" />
            <div className="content">
              {pr.title}
            </div>
          </div>
        ))
      return (
        <div className="ui card">
          <div className="content">
            <div className="ui header">
              <i className="book icon" />
              <div className="content">
                {this.props.repo.name}
              </div>
            </div>
            <div className="ui icon list">{prs}</div>
          </div>
        </div>
      )
    }
  }
)
export default DecoratedRepo
