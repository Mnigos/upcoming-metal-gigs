import { defineField, defineType } from 'sanity'

export const gigType = defineType({
  name: 'gig',
  title: 'Gig',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'artists',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'artist' },
        },
      ],
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: { type: 'venue' },
    }),
    defineField({
      name: 'imageUrl',
      type: 'string',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
  ],
})
