import React from "react";
import {
  InlineTextarea,
  InlineGroup,
  InlineText,
  BlocksControls,
} from "react-tinacms-inline";

export default function (props) {
  const { title, subtitle, primaryButton, secondaryButton } = props.data;

  return (
    <BlocksControls index={props.index}>
      <div className="hero">
        <h1>
          {/* <InlineTextarea name="title" /> */}
          {title}
        </h1>
        <p>
          {/* <InlineTextarea name="subtitle" /> */}
          {subtitle}
        </p>
        <button className="btn-primary">{primaryButton.text}</button>
        <button className="btn-secondary">{secondaryButton.text}</button>
      </div>
    </BlocksControls>
  );
}

export const hero_template = {
  label: "Hero",
  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      component: "text",
    },
  ],
};
