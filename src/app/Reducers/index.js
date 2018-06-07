import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import formReducer from "./formReducer";
import { reducer as form } from "redux-form";

export default combineReducers({
  todos,
  visibilityFilter,
  routing: routerReducer,
  form,
  formReducer
});
