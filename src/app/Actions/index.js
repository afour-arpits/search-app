import * as api from "../Api/FakeServer";
import firebase from "firebase";
import { actionTypes } from "react-redux-firebase";

import { reduxConfig } from "../../configureStore";

/*
 * action types
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const LOAD_FORM = "LOAD_FORM";
/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
export const initFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  married: "",
  gender: "",
  email: "",
  diseases: []
};
/*
 * action creators
 */

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    index
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export const loadFormData = uId => {
  return {
    type: LOAD_FORM,
    uId,
    data: initFormState
  };
};
export const addUser = userobj => dispatch => {
  console.log(api);
  api.addUsers(userobj).then(response => {
    dispatch({
      type: "ADD_USER",
      response: response
    });
  });
};
export const getUserList = () => dispatch => {
  api.getUsers().then(response => {
    console.log(response);
    dispatch({
      type: "GET_USERS",
      response: response
    });
  });
};

// recreating code from react-redux-firebase
export const createUserProfile = ({ user }) => {
  const profile = {
    email: user.email,
    displayName: user.displayName || user.email,
    avatarUrl: user.photoURL,
    providerData: user.providerId
  };

  const populateUsers = () => {
    return firebase
      .ref(`${reduxConfig.userProfile}/${user.uid}`)
      .once("value")
      .then(profileSnap => {
        !reduxConfig.updateProfileOnLogin && profileSnap.val() !== null
          ? profileSnap.val()
          : profileSnap.ref.update(profile).then(() => profile);
      })
      .catch(err => console.log(err));
  };

  return dispatch => {
    populateUsers().then(profile => {
      console.log(profile);
      dispatch({
        type: actionTypes.SET_PROFILE,
        profile: profile
      });
    });
  };
};
