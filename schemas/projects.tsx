import { defineField } from "sanity";

export default defineField({
  name: "projects",
  type: "document",
  title: "Projects",
  preview: {
    select: {
      title: "name",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Project",
      };
    },
  },
  fields: [
    {
      name: "image",
      type: "image",
      title: "Project Image",
    },
    {
      name: "name",
      type: "string",
      title: "Product Name",
    },
    {
      name: "url",
      type: "string",
      title: "Project Url",
    },
  ],
});
