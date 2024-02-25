import React from "react";
import InputMask from "react-input-mask";
import UniformTextField from "./UniformTextField";
import { CpfValidator, NonEmptyValidator } from "./Validations";

const CPFMask = "999.999.999-99";

const Cpf = ({ helperText, onBlur, value, onChange, type }) => {
  return (
    <InputMask
      type={type}
      mask={CPFMask}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      {() => (
        <UniformTextField
          type={type}
          error={helperText}
          id="standard-helperText"
          label="CPF"
          helperText={helperText}
          variant="standard"
        />
      )}
    </InputMask>
  );
};

const Foo = (props) => <CpfValidator {...props} Children={Cpf} />;
export default (props) => <NonEmptyValidator {...props} Children={Foo} />;
