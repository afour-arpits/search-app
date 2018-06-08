import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { firebaseReducer } from "react-redux-firebase";

import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import { reducer as form } from "redux-form";
import formReducer from "./formReducer";

export default combineReducers({
  firebase: firebaseReducer,
  routing: routerReducer,
  todos,
  visibilityFilter,
  form,
  formReducer
});
