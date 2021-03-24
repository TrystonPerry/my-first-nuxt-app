import React from "react";
import {
  InlineTextarea,
  InlineGroup,
  InlineText,
  BlocksControls,
} from "react-tinacms-inline";
import { ACTION_FIELDS, Actions } from "./Actions";

export default function (props) {
  const { title, subtitle, actions } = props.data;

  return (
    <BlocksControls insetControls={true} index={props.index}>
      <div className="hero">
        <h1>
          {/* <InlineTextarea name="title" /> */}
          {title}
        </h1>
        <p>
          {/* <InlineTextarea name="subtitle" /> */}
          {subtitle}
        </p>
        <Actions actions={actions} />
      </div>
    </BlocksControls>
  );
}

export const hero_template = {
  label: "Hero",
  defaultItem: {
    title: "Title",
    subtitle: "Subtitle",
  },
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
    ...ACTION_FIELDS,
  ],
};
