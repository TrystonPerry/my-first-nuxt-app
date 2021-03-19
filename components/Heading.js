import React from "react";
import { InlineTextarea } from "react-tinacms-inline";

export default function (props) {
  const { component, text } = props;

  return React.createElement(component, null, text);
}
