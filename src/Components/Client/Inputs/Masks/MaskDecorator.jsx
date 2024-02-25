import React, { useEffect } from "react";
import useOnKeyUp from "../../Questionnaire/Pages/useOnKeyUp";

const MaskDecorator = (props) => {
  React.Children.only(props.children);

  const inputRef = useOnKeyUp((_event, ref) => {
    if (ref.current !== null && document.activeElement === ref.current)
      props.format.resetCursor(ref);
  });

  const value = inputRef.current?.value;
  useEffect(() => {
    if (inputRef.current === null) return;
    if (
      document.activeElement === inputRef.current &&
      inputRef.current.selectionStart === inputRef.current.selectionEnd
    ) {
      props.format.resetCursor(inputRef);
    }
  }, [value, inputRef, props.format]);

  const onChange = (event) => {
    const formatted = {
      ...event,
      target: {
        ...event.target,
        value: props.format(event.target.value),
      },
    };

    if (props.onChange !== undefined) props.onChange(formatted);
  };

  return React.cloneElement(props.children, {
    ...props,
    inputRef: (instance) => {
      inputRef.current = instance;
      if (typeof props.children.inputRef === "function")
        props.children.inputRef(instance);
      else if (typeof props.children.inputRef === "object")
        props.children.inputRef.current = instance;
    },
    onFocus: (event) => {
      if (props.children.onFocus !== undefined) props.children.onFocus(event);
      if (
        inputRef.current !== null &&
        document.activeElement === inputRef.current
      )
        props.format.resetCursor(inputRef);
    },
    onClick: (event) => {
      if (props.children.onClick !== undefined) props.children.onClick(event);
      if (
        inputRef.current !== null &&
        document.activeElement === inputRef.current
      )
        props.format.resetCursor(inputRef);
    },
    onChange: (event) => {
      if (props.children.onChange !== undefined) props.children.onChange(event);
      if (
        inputRef.current !== null &&
        document.activeElement === inputRef.current
      )
        onChange(event);
    },
    format: props.children.format,
  });
};

export default MaskDecorator;
