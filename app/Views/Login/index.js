import React, {Component} from 'react'
import Omicron from 'omicron'

const DecoratedLogin = Omicron((
  class Login extends Component {
    render() {
      return (
        <div className="ui equal width padded grid">
          <div className="center aligned column">
            <div className="ui big header">Login for phat stuff</div>
            <div className="ui center aligned form">
              <div className="field">
                <div className="ui primary button">
                  <i className="github icon" />
                  Login with Github
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
))

export default DecoratedLogin
