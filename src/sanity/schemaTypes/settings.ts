import {defineField, defineType} from 'sanity'
import {ThemeList} from '../lib/themes' 

export const settingsType = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
          {title: 'Cupcake', value: 'cupcake'},
          {title: 'Bumblebee', value: 'bumblebee'},
          {title: 'Emerald', value: 'emerald'},
          {title: 'Corporate', value: 'corporate'},
          {title: 'Synthwave', value: 'synthwave'},
          {title: 'Retro', value: 'retro'},
          {title: 'Cyberpunk', value: 'cyberpunk'},
          {title: 'Valentine', value: 'valentine'},
          {title: 'Halloween', value: 'halloween'},
          {title: 'Garden', value: 'garden'},
          {title: 'Forest', value: 'forest'},
          {title: 'Aqua', value: 'aqua'},
          {title: 'Lofi', value: 'lofi'},
          {title: 'Pastel', value: 'pastel'},
          {title: 'Fantasy', value: 'fantasy'},
          {title: 'Wireframe', value: 'wireframe'},
          {title: 'Black', value: 'black'},
          {title: 'Luxury', value: 'luxury'},
          {title: 'Dracula', value: 'dracula'},
          {title: 'CMYK', value: 'cmyk'},
          {title: 'Autumn', value: 'autumn'},
          {title: 'Business', value: 'business'},
          {title: 'Acid', value: 'acid'},
          {title: 'Lemonade', value: 'lemonade'},
          {title: 'Night', value: 'night'},
          {title: 'Coffee', value: 'coffee'},
          {title: 'Winter', value: 'winter'},
          {title: 'Dim', value: 'dim'},
          {title: 'Nord', value: 'nord'},
          {title: 'Sunset', value: 'sunset'},
        ],
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
    
  ],
})
