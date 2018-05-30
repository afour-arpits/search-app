import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.scss'

import AsyncDashboard from './Dashboard/AsyncDashboard.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to={'dashboard'}>dashboard</Link>
          <Route path="/dashboard" component={AsyncDashboard}></Route>
        </div>
      </Router>
    );
  }
}
export default App;
