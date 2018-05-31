import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.scss'

import AsyncDashboard from './Dashboard/AsyncDashboard.jsx'
import TodoListContainer from './Todo/TodoList.container.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to={'dashboard'}>Dashboard</Link>
          <br />
          <Link to={'todo'}>Todo</Link>
          <Route path="/dashboard" component={AsyncDashboard}></Route>
          <Route path="/todo" component={TodoListContainer}></Route>
        </div>
      </Router>
    );
  }
}
export default App;
