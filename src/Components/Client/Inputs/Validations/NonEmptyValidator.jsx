import React from "react";
import { isNonEmptyString, OnblurValidator } from "./Base";

const TEXT_PRESENT_ERROR = "Esse campo é obrigatório.";

const NonEmptyValidator = (props) => {
  return (
    <OnblurValidator
      {...props}
      predicate={isNonEmptyString}
      errorMessage={TEXT_PRESENT_ERROR}
      Children={props.Children}
    />
  );
};

export default NonEmptyValidator;
