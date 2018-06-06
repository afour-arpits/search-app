import React from "react";
/**
 * to be wrapped with redux-form Field component
 */
export default function FormField(props) {
  const { input, ...inputProps } = props;
  return (
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input
        className="form-control"
        {...inputProps}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </div>
  );
}
