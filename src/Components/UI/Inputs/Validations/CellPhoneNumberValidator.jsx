import React from "react";
import { isPhoneNumber } from "./Base";
import ByTimeValidator from "./Base/ByTimeValidator";

const TEXT_PRESENT_ERROR = "Inválido, informe um número válido";

const CellPhoneNumberValidator = (props) => {
  return (
    <ByTimeValidator
      {...props}
      predicate={isPhoneNumber}
      errorMessage={TEXT_PRESENT_ERROR}
      Children={props.Children}
    />
  );
};

export default CellPhoneNumberValidator;
