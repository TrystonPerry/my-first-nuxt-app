import React from "react";
import { InlineTextarea } from "react-tinacms-inline";

export default function (props) {
  const { title, subtitle, primaryButton, secondaryButton } = props;

  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button className="btn-primary">{primaryButton.text}</button>
      <button className="btn-secondary">{secondaryButton.text}</button>
    </div>
  );
}
