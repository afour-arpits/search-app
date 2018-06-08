import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import "./App.scss";

import AsyncDashboard from "./Dashboard/AsyncDashboard";
import TodoListContainer from "./Todo/TodoList.container";
import MainFormContainer from "./ParticipantForm/MainForm.container";
import Home from "./Home/Home";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={AsyncDashboard} />
          <Route path="/todo" component={TodoListContainer} />
          <Route path="/participantform" component={MainFormContainer} />
        </div>
        <footer />
      </div>
    );
  }
}

// App.propTypes = {
//   history: PropTypes.object.isRequired
// }
export default App;
