import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product', title: 'Products & Patterns', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Pattern title', type: 'string', validation: r => r.required()}),
    defineField({name: 'slug', title: 'URL slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: r => r.required()}),
    defineField({name: 'category', title: 'Category', type: 'string', options: {list: ['Amigurumi', 'Blankets', 'Accessories', 'Home decor', 'Sweater', 'Other']}, validation: r => r.required()}),
    defineField({name: 'difficulty', title: 'Difficulty', type: 'string', options: {list: ['Beginner', 'Intermediate', 'Advanced']}, initialValue: 'Beginner', validation: r => r.required()}),
    defineField({name: 'shortDescription', title: 'Short description', type: 'text', rows: 3}),
    defineField({name: 'mainImage', title: 'Main card image', type: 'image', options: {hotspot: true}, validation: r => r.required()}),
    defineField({name: 'guideImages', title: 'Step-by-step images', type: 'array', of: [{type: 'image', options: {hotspot: true}}]}),
    defineField({name: 'instructions', title: 'Pattern instructions', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'pdf', title: 'Pattern PDF', type: 'file', options: {accept: 'application/pdf'}}),
    defineField({name: 'isFree', title: 'Free PDF download', type: 'boolean', initialValue: true}),
    defineField({name: 'price', title: 'Printable PDF price', type: 'string', hidden: ({document}) => document?.isFree !== false}),
    defineField({name: 'checkoutUrl', title: 'Printable PDF checkout URL', type: 'url', hidden: ({document}) => document?.isFree !== false}),
    defineField({name: 'featured', title: 'Feature this pattern', type: 'boolean', initialValue: false}),
    defineField({name: 'publishedAt', title: 'Publish date', type: 'datetime', initialValue: () => new Date().toISOString()}),
  ],
  preview: {select: {title: 'title', subtitle: 'difficulty', media: 'mainImage'}},
})
