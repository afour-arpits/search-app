import React, { Component } from 'react';
import './App.scss'
import Loading from './Loading/index.jsx';
import Loadable from 'react-loadable';

const fn = () => import('./Dashboard/index.jsx');

const LoadableComponent = Loadable({
  loader: fn,
  loading: Loading
});

class App extends Component {
  render() {
    return <LoadableComponent />;
  }
}
export default App;
