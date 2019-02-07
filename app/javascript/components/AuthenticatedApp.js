import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Dvds from './pages/Dvds'
import NewDvd from './pages/NewDvd'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/new-dvd" component={NewDvd} />
            <Route path="/dvds" component={Dvds} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
