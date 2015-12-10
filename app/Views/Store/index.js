import React, {Component} from 'react'
import Omicron from 'omicron'

/**
 * Shows what is in the Omicron.store.  Give sub menu items for each top level store key.
 */
const DecoratedStore = Omicron(
  class Store extends Component {
    constructor(props) {
      super(props)
      this.state = {activeKey: _.keys(this.store)[0]}
    }

    onClick(activeKey) {
      this.setState({activeKey})
    }

    render() {
      const {store} = this
      const {activeKey} = this.state

      const storeKeys = _.map(store, (val, key) => {
        return (
          <div
            key={key}
            className={`link item ${activeKey === key && ' active'}`}
            onClick={this.onClick.bind(this, key)}>
            {key}
          </div>
        )
      })

      const storeValues = _.map(store[activeKey], (val, key) => {
        return (
          <pre
            key={val.id}
            style={{maxHeight: 400, scroll: 'auto', fontSize: '0.875em'}}
            className="ui segment"
          >{JSON.stringify(val, null, 2)}</pre>
        )
      })

      return (
        <div>
          <div className="ui horizontal secondary pointing menu">
            <div className="header item">Top Level Keys:</div>
            {storeKeys}
          </div>
          <div className="ui header">
            {this.state.activeKey && `Objects in ${this.state.activeKey}`}
          </div>
          {storeValues}
        </div>
      )
    }
  }
)

export default DecoratedStore
