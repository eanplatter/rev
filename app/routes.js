import React from 'react'
import Router, {Route} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Root from 'app/Views/Root'
import Login from 'app/Views/Login'
import Repos from 'app/Views/Repos'
import PRs from 'app/Views/PRs'
import Store from 'app/Views/Store'

const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <Route component={Root} path='/'>
      <Route component={Login} path='/login' />
      <Route component={Repos} path='/repos' />
      <Route component={PRs} path='/prs' />
      <Route component={Store} path='/store' />
    </Route>
  </Router>
)

export default routes
