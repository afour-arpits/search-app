import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import MainForm from "./MainForm";

const mapStateToProps = state => {
  return {
    // fields: state.fields
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  };
};

export const MainFormContainer = ({ handleSubmit }) => {
  return <MainForm onSubmit={submitForm} handleSubmit={handleSubmit} />;
};
const submitForm = formValues => {
  console.log("submitting Form: ", formValues);
};
const formConfiguration = {
  form: "my-very-own-form"
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MainForm);
export default reduxForm(formConfiguration)(MainFormContainer);
