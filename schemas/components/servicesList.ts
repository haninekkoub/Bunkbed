import { defineField } from "sanity";

export default defineField({
  name: "block.servicesList",
  type: "object",
  title: "Services List",
  preview: {
    prepare() {
      return {
        title: "Services",
        subtitle: "Services List Component",
      };
    },
  },
  fields: [
    {
      name: "content",
      title: "Services List",
      type: "array",
      of: [
        {
          name: "services",
          type: "reference",
          to: [{ type: "services" }],
        },
      ],
    },
  ],
});
