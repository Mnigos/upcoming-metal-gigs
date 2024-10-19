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
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: rule =>
        rule.required().error(`Required to generate a page on the website`),
      hidden: ({ document }) => !document?.name,
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
