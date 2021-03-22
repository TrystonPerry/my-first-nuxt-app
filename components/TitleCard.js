import React from "react";
import { InlineText } from "react-tinacms-inline";

export default function (props) {
  const { title, body, button } = props;

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{body}</p>
      <button className="btn-primary">{button.text}</button>
    </div>
  );
}
