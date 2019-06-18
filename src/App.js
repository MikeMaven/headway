import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import LandingPageContainer from './containers/LandingPageContainer'
import SignInContainer from './containers/SignInContainer'

const App = props => {
  return(
    <div>
    <Router history={browserHistory}>
      <Route path='/' component={SignInContainer}/>
      <Route path='/landing' component={LandingPageContainer}/>
    </Router>
    </div>
  )
}

export default App;
