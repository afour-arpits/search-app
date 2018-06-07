import React from "react";
import { Label, Input, FormGroup, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";
/**
 * to be wrapped with redux-form Field component
 */
export default function FormField(props) {
  const { input, meta, ...inputProps } = props;
  return (
    <FormGroup>
      <Label for={props.name}>{props.label}</Label>
      <Input
        {...props}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        {...inputState(meta, input)}
        value={input.value}
      />
      <FormFeedback>
        {meta.touched &&
          ((meta.error && <span>{meta.error}</span>) ||
            (meta.warning && <span>{meta.warning}</span>))}
      </FormFeedback>
    </FormGroup>
  );
}
const inputState = (meta, field) => {
  // console.log(meta);
  if ((meta.touched && meta.error) || meta.warning) {
    return { invalid: true };
  } else if (meta.touched && !meta.error && !meta.warning) {
    return {};
  } else {
    return {};
  }
};
FormField.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    error: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired
  }).isRequired
};
