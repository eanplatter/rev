import React, {Component} from 'react'
import Omicron from 'omicron'
import {Link} from 'react-router'
import * as GitHubActions from 'app/Actions/GitHubActions'

// initial state
Omicron.setStore({
  prs: [],
  repos: [],
})

export default class Root extends Component {
  componentDidMount() {
    GitHubActions.getAllPRs()
    GitHubActions.getRepos()
    console.log(this.context)
  }

  render() {
    return (
      <div className='ui container'>
        <div className="ui horizontal menu">
          <Link to="/repos" activeClassName="active" className="item">Repos</Link>
          <Link to="/prs" activeClassName="active" className="item">PRs</Link>
          <Link to="/store" activeClassName="active" className="item">Store</Link>
          <Link to="/login" activeClassName="active" className="right floated item">Login</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
