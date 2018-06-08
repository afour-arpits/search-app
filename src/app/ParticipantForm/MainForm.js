import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Button, Label, Input, FormText, Form, FormGroup } from "reactstrap";
import FormField from "../Components/FormField/FormField";
import { formReducer, loadFormData } from "../Reducers/formReducer";
import {
  required,
  maxLength,
  maxLength15,
  minLength,
  minLength2,
  number,
  minValue,
  minValue13,
  email,
  tooYoung,
  alphaNumeric,
  phoneNumber
} from "./validations";
let MainForm = props => {
  const diseasesList = [
    "Heart Disease",
    "Cancer",
    "Arthritis",
    "High Blood Pressure ",
    "Asthma",
    "Alzheimer's disease ",
    "Common cold",
    "Dengue",
    "Diabetes mellitus",
    "Hepatitis A",
    "Hepatitis B",
    "Hepatitis C",
    "Hepatitis D",
    "Hepatitis E",
    "Obesity",
    "Osteoarthritis",
    "Osteoporosis",
    "Tinnitus",
    "Tonsillitis",
    "Tooth decay",
    "Toxic shock syndrome",
    "Ulcers"
  ];

  const { handleSubmit, pristine, reset, invalid, submitting } = props;
  return (
    <div className="col-md-12 col-sm-12 p-4">
      <h3 className="">Trials Participation Form</h3>
      <Form onSubmit={handleSubmit}>
        <Field
          label="First Name"
          validate={[required, maxLength15, minLength2]}
          name="firstName"
          type="test"
          id="firstName"
          placeholder="First Name"
          component={FormField}
        />
        <Field
          label="Last Name"
          name="lastName"
          type="text"
          id="lastName"
          placeholder="Last Name"
          component={FormField}
        />
        <Field
          label="Email ID"
          name="email"
          type="email"
          id="email"
          validate={[required, email]}
          placeholder="Email ID"
          component={FormField}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          id="phone"
          validate={[required, phoneNumber]}
          placeholder="Phone"
          component={FormField}
        />
        <Field
          label="Date of Birth"
          name="dob"
          type="date"
          id="dob"
          validate={[required]}
          placeholder="Date of Birth"
          component={FormField}
        />
        <Field
          label="Maritial Status"
          name="married"
          type="select"
          id="married"
          placeholder="Maritial Status"
          component={FormField}
        >
          <option>Single</option>
          <option>Married</option>
        </Field>
        <FormGroup tag="fieldset">
          <Label for="gender">Gender</Label>
          <FormGroup check>
            <Label check>
              <Field
                component="input"
                type="radio"
                name="gender"
                value="male"
                checked="true"
              />{" "}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Field
                component="input"
                type="radio"
                name="gender"
                value="female"
              />{" "}
              Female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Field
                component="input"
                type="radio"
                name="gender"
                value="other"
              />{" "}
              Other
            </Label>
          </FormGroup>
        </FormGroup>
        <Field
          label="Diseases History"
          name="diseases"
          type="select"
          multiple
          id="diseases"
          placeholder="Diseases History"
          component={FormField}
        >
          {diseasesList.map(diesase => (
            <option key={diesase}>{diesase}</option>
          ))}
        </Field>
        <Button color="primary" disabled={pristine || invalid || submitting}>
          Submit
        </Button>
        <Button className="ml-1" color="secondary" onClick={reset}>
          Reset
        </Button>
      </Form>
    </div>
  );
};
const formConfiguration = {
  form: "participant-form" // a unique identifier for this form
};
MainForm = reduxForm(formConfiguration)(MainForm);
MainForm = connect(
  state => ({
    initialValues: state.formReducer // pull initial values from formReducer reducer
  }),
  { loadFormData: loadFormData } // bind account loading form creator
)(MainForm);

export default MainForm;
