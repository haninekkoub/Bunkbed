import { defineField } from "sanity";

export default defineField({
  name: "block.about",
  type: "object",
  title: "About",
  preview: {
    select: {
      title: "About Us",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "About component",
      };
    },
  },

  fields: [
    {
      name: "aboutDescription",
      type: "text",
      title: "About Description",
    },
    {
      name: "icon",
      title: "Svg Icon",
      type: "inlineSvg",
    },
  ],
});
