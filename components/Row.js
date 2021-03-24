import React from "react";
import { InlineText } from "react-tinacms-inline";

import CustomComponents from "./globals";

export default function (props) {
  const { flexible, children } = props.data;

  return (
    <div className="row">
      {children.map(({ component, props }, index) => (
        <div className="row-item" key={index}>
          {CustomComponents[component](props)}
        </div>
      ))}
    </div>
  );
}
