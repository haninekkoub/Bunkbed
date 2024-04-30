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
  ],
});
