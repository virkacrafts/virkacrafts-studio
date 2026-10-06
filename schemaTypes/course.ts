import {defineField, defineType} from 'sanity'

export const course = defineType({
  name: 'course', title: 'Courses', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Course title', type: 'string', validation: r => r.required()}),
    defineField({name: 'slug', title: 'URL slug', type: 'slug', options: {source: 'title'}, validation: r => r.required()}),
    defineField({name: 'level', title: 'Skill level', type: 'string', options: {list: ['Basic', 'Intermediate', 'Advanced']}, initialValue: 'Basic'}),
    defineField({name: 'summary', title: 'Short summary', type: 'text', rows: 3, validation: r => r.required()}),
    defineField({name: 'coverImage', title: 'Course cover image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'description', title: 'Full course description', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'guides', title: 'Included stitch guides', type: 'array', of: [{type: 'reference', to: [{type: 'guide'}]}]}),
    defineField({name: 'isPublished', title: 'Published', type: 'boolean', initialValue: true}),
  ],
  preview: {select: {title: 'title', subtitle: 'level', media: 'coverImage'}},
})
