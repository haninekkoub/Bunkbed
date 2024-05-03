export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Page Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Page Slug",
    },
    {
      name: "content",
      type: "array",
      title: "Page Content",
      of: [
        { type: "block.banner" },
        { type: "block.about" },
        { type: "block.projectsList" },
        { type: "block.servicesList" },
      ],
    },
  ],
};
