import { defineField } from "sanity";

export default defineField({
  name: "services",
  type: "document",
  title: "Services",
  preview: {
    select: {
      title: "name",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Service",
      };
    },
  },
  fields: [
    {
      name: "image",
      type: "image",
      title: "Service Image",
    },
    {
      name: "name",
      type: "string",
      title: "Service title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "id",
      type: "number",
      title: "id",
    },
  ],
});
