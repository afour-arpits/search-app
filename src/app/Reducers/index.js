import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import formReducer from "./formReducer";

export default combineReducers({
  todos,
  visibilityFilter,
  formReducer
});
