import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';

import { Provider } from 'react-redux'
import {
  createStore
} from 'redux'

import rootReducer from './app/Reducers'
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));