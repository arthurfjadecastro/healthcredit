import React from "react";
import PropTypes from "prop-types";
import UniformTextField from "./UniformTextField";
import { EmailValidator, NonEmptyValidator } from "./Validations";

const Email = ({ helperText, onBlur, value, onChange, type }) => {
  return (
    <React.Fragment>
      <UniformTextField
        variant="standard"
        label={"E-mail"}
        autoComplete="off"
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={false}
        value={value}
        error={helperText}
        helperText={helperText}
        id="Email"
      />
      <React.Fragment></React.Fragment>
    </React.Fragment>
  );
};

Email.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Wrapper = (props) => <EmailValidator {...props} Children={Email} />;
export default (props) => <NonEmptyValidator {...props} Children={Wrapper} />;
