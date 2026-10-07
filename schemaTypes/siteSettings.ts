import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Branding',
  type: 'document',
  fields: [
    defineField({name: 'siteTitle', title: 'Website name', type: 'string', initialValue: 'VirkaCrafts'}),
    defineField({name: 'websiteLogo', title: 'Official website logo', type: 'image', options: {hotspot: true}, description: 'This logo is shown in the website header and navigation.'}),
  ],
  preview: {select: {title: 'siteTitle', media: 'websiteLogo'}},
})
