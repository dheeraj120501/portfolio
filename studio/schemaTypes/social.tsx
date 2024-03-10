import {defineField, defineType} from 'sanity'
import { InlineSvgPreviewItem } from '@focus-reactive/sanity-plugin-inline-svg-input'

const Social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      href: 'href',
      icon: 'icon',
    },
    prepare(selection) {
      const {name, href} = selection
      return {...selection, title: name, subtitle: href}
    },
  },
  
})

export default Social
  
  