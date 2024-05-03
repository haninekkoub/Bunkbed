import { defineField } from "sanity";

export default defineField({
  name: "block.projectsList",
  type: "object",
  title: "Projects List",
  preview: {
    prepare() {
      return {
        title: "Projects",
        subtitle: "Projects List Component",
      };
    },
  },
  fields: [
    {
      name: "content",
      title: "Projects List",
      type: "array",
      of: [
        {
          name: "projects",
          type: "reference",
          to: [{ type: "projects" }],
        },
      ],
    },
  ],
});
