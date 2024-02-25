import React, { useState, useEffect } from "react";

const OnBlurValidator = (props) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (props.value) {
      setIsValid(true);
    }
  }, [props.value]);

  const onBlur = (e) => {
    const value = e.target.value;
    const isValid = props.predicate(value);
    setIsValid(isValid);
  };

  if (isValid || props.notRequired) {
    return <props.Children {...props} onBlur={onBlur} />;
  } else {
    return (
      <props.Children
        {...props}
        helperText={props.errorMessage === " " ? null : props.errorMessage}
        error={true}
        onBlur={onBlur}
      />
    );
  }
};

export default OnBlurValidator;
