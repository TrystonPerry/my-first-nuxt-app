import React from "react";
import { InlineText } from "react-tinacms-inline";

import CustomComponents from "./globals";

export default function (props) {
  const { flexible, children } = props;

  return (
    <div className="row">
      {children.map((child) => (
        <div className="row-item">
          {CustomComponents[child.component](child.props)}
        </div>
      ))}
    </div>
  );
}
