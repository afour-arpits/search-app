import firebase from "firebase/app";
import { compose, createStore, applyMiddleware } from "redux";

import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import { config } from "./firebase.config";
import rootReducer from "./app/Reducers";

// react-redux-firebase options
export const reduxConfig = {
  userProfile: "users", // firebase root where user profiles are stored
  attachAuthIsReady: true, // attaches auth is ready promise to store
  updateProfileOnLogin: true,
  enableLogging: false // enable/disable Firebase's database logging
};

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

export const createInitialStore = (initialState = {}) => {
  // Initialize Firebase instance
  firebase.initializeApp(config);

  // Add redux Firebase to compose
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, reduxConfig),
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore);

  // Create store with reducers and initial state
  const store = createStoreWithFirebase(rootReducer, initialState);

  // Listen for auth ready (promise available on store thanks to attachAuthIsReady: true config option)
  store.firebaseAuthIsReady.then(() => {
    console.log("Auth has loaded"); // eslint-disable-line no-console
  });

  return store;
};
