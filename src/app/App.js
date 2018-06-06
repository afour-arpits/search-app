import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import './App.scss'

import AsyncDashboard from './Dashboard/AsyncDashboard'
import TodoListContainer from './Todo/TodoList.container'
import Home from './Home/Home'
import Header from './Components/Header'

class App extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div>
        <Header></Header>
        <div>
          <Link to={'dashboard'}>Dashboard</Link>
          <br />
          <Link to={'todo'}>Todo</Link>
          <br />
          <Link to={'/'}>Home</Link>
          <Route exact path="/" component={Home}></Route>
          <Route path="/dashboard" component={AsyncDashboard}></Route>
          <Route path="/todo" component={TodoListContainer}></Route>
        </div>
        <footer></footer>
      </div>
    );
  }
}

// App.propTypes = {
//   history: PropTypes.object.isRequired
// }
export default App;
