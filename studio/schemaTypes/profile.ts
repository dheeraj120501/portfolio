export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'about',
        title: 'About',
        type: 'text'
      },
      {
        name: 'typewritter',
        title: "Typewritter Phrases",
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'pic',
        title: "Profile Pic",
        type: 'image',
        options: {
          hotspot: true 
        }
      }
    ]
  }