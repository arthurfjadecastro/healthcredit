import React from "react";
import ByTimeValidator from "./Base/ByTimeValidator";
import { isEmail } from "../Validations/Base";

const TEXT_PRESENT_ERROR =
  "Email inválido, informe um e-mail no formato usuario@email.com";

const EmailValidator = (props) => {
  return (
    <ByTimeValidator
      {...props}
      predicate={isEmail}
      errorMessage={TEXT_PRESENT_ERROR}
      Children={props.Children}
    />
  );
};

export default EmailValidator;
