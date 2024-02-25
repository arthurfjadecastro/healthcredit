import MaskDecorator from "./MaskDecorator";
import React from "react";
import createMonetaryFormatter from "./Formatters/createMonetaryFormatter";

const MonetaryMaskDecorator = (props) => (
  <MaskDecorator
    onChange={props.onChange}
    format={createMonetaryFormatter(props.min, props.max)}
  >
    {props.children}
  </MaskDecorator>
);

export default MonetaryMaskDecorator;
