import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import formReducer from "./formReducer";

export default combineReducers({
  todos,
  visibilityFilter,
  routing: routerReducer,
  formReducer
});
