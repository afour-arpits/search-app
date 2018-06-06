import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import './App.scss'

import AsyncDashboard from './Dashboard/AsyncDashboard'
import TodoListContainer from './Todo/TodoList.container'

class App extends Component {
  render() {
    console.log(this.props.history)
    return (
      // <Router history={this.props.history}>
      <div>
        <Link to={'dashboard'}>Dashboard</Link>
        <br />
        {/*<a href="/todo">todo</a>*/}
        <Link to={'todo'}>Todo</Link>
        <Route path="/dashboard" component={AsyncDashboard}></Route>
        <Route path="/todo" component={TodoListContainer}></Route>
      </div>
      // </Router>
    );
  }
}

// App.propTypes = {
//   history: PropTypes.object.isRequired
// }
export default App;
