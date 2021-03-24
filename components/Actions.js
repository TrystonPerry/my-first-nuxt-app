import { InlineGroup, InlineText } from "react-tinacms-inline";

export const Actions = ({ actions }) => {
  return (
    <div class="w-full">
      <InlineGroup
        name=""
        focusRing={{ offset: 16 }}
        insetControls={true}
        fields={ACTION_FIELDS}
      >
        {actions.map((action, index) => (
          <button key={index} className={`btn-${action.type}`}>
            {action.label}
          </button>
        ))}
      </InlineGroup>
    </div>
  );
};

export const ACTION_FIELDS = [
  {
    label: "Actions",
    name: "actions",
    component: "group-list",
    itemProps: (item) => ({
      label: item.label,
    }),
    defaultItem: () => ({
      label: "Action Label",
      type: "button",
    }),
    fields: [
      {
        label: "Label",
        name: "label",
        component: "text",
      },
      {
        label: "Type",
        name: "type",
        component: "select",
        options: [
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
        ],
      },
    ],
  },
];
