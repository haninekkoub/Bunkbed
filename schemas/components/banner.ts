import { defineField } from "sanity";

export default defineField({
  name: "block.banner",
  type: "object",
  title: "Banner",
  preview: {
    select: {
      title: "bannerText",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Banner component",
      };
    },
  },

  fields: [
    {
      name: "bannerText",
      type: "text",
      title: "Banner text",
    },
    {
      name: "textAlign",
      title: "Text Align",
      type: "string",
      options: {
        list: [
          {
            title: "Left",
            value: "left",
          },
          {
            title: "Center",
            value: "center",
          },
          {
            title: "Right",
            value: "right",
          },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "textSize",
      title: "Text Size",
      type: "string",
      options: {
        list: [
          {
            title: "Medium",
            value: "medium",
          },
          {
            title: "Large",
            value: "large",
          },
        ],
        layout: "dropdown",
      },
    },
  ],
});
