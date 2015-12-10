import React, {Component} from 'react'

export default class PR extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="ui header">
            <i className="fork icon" />
            <div className="content">
              {this.props.pr.title}
              <div className="sub header">
                <i className="book icon" />
                {this.props.pr.head.repo.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
