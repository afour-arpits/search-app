import React from "react";
import { reduxForm, Field } from "redux-form";
// import FormField from "../Components/FormField";
export const MainForm = props => {
  const { handleSubmit, onSubmit, pristine, reset, submitting } = props;
  return (
    <div>
      <h1>My Very own Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <Field name="firstName" type="text" component="input" />
        </div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};
// export default MainForm;
export default reduxForm({
  form: "simple" // a unique identifier for this form
})(MainForm);
