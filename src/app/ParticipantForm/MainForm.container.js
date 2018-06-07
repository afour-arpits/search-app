import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { addUser, getUserList } from "../Actions";
import MainForm from "./MainForm";

export const MainFormContainer = ({ dispatch }) => {
  return (
    <MainForm
      onSubmit={(formValues, dispatch) => {
        dispatch(addUser(formValues));
        dispatch(getUserList());
      }}
    />
  );
};
MainFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};
export default connect()(MainFormContainer);
