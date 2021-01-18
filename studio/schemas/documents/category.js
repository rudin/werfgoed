export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'posts',
      title: "Posts",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
    }
  ]
}
