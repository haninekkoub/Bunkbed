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

// title: 'Text Segment',
//   preview: {
//     select: {
//       title: 'textSegment',
//     },
//     prepare(value) {
//       const block = (value.title || []).find((block: any) => block._type === 'block')
//       return {
//         title: block
//           ? block.children
//               .filter((child: {_type: string}) => child._type === 'span')
//               .map((span: {text: any}) => span.text)
//               .join('')
//           : 'No title',
//         subtitle: 'Text Segment Component',
//         media: <span>🎫</span>,
//       }
//     },
//   },
