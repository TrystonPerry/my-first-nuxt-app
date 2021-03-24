import React from "react";
import { InlineText } from "react-tinacms-inline";
import ReactMarkdown from "react-markdown";

export default function (props) {
  const { text, markdown, className } = props.data;

  const classes = `paragraph ${className || ""}`;

  return markdown ? (
    <ReactMarkdown source={text} className={classes} />
  ) : (
    <p className={classes}>{text}</p>
  );
}
