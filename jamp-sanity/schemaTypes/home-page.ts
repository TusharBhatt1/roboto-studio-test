import { defineType, defineField } from 'sanity';

export const bannerSection = defineType({
  name: 'bannerSection',
  title: 'Home Banner Section',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],

})


export const sectionOne = defineType({
  name: 'homeSectionOne',
  title: 'Home Section One',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: '1:1', value: '1/1' },
          { title: '3:2', value: '3/2' },
          { title: '16:9', value: '16/9' },
          { title: '9:16', value: '9/16' },
        ],
      },
    }),
    defineField({
      name: 'ctas',
      title: 'Call To Actions',
      type: 'array',
      validation: (Rule) => Rule.required().max(3),
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'text', type: 'string', title: 'CTA Text' }),
            defineField({
              name: 'href',
              type: 'string',
              title: 'Route',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});


export const sectionTwo = defineType({
  name: 'homeSectionTwo',
  title: 'Home Section Two',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'item',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'aspectRatio',
              title: 'Aspect Ratio',
              type: 'string',
              options: {
                list: [
                  { title: '1:1', value: '1/1' },
                  { title: '3:2', value: '3/2' },
                  { title: '9:16', value: '9/16' },
                  { title: '16:9', value: '16/9' },
                ],
              },
            }),
          ],
        },
      ],
    }),
  ],
});

export const sectionThree = defineType({
    name: 'homeSectionThree',
    title: 'Home Section Three',
    type: 'document',
    fields: [...sectionOne.fields], 
  });

  export const sectionFour = defineType({
    name: 'homeSectionFour',
    title: 'Home Section Four',
    type: 'document',
    fields: [...sectionTwo.fields],
  });

  export const sectionFive = defineType({
    name: 'homeSectionFive',
    title: 'Home Section Five',
    type: 'document',
    fields: [...sectionOne.fields],
  });  

  export const sectionSix = defineType({
    name: 'homeSectionSix',
    title: 'Home Section Six',
    type: 'document',
    fields: [...sectionTwo.fields],
  });
  export const sectionSeven = defineType({
    name: 'homeSectionSeven',
    title: 'Home Section Seven',
    type: 'document',
    fields: [...sectionOne.fields],
  });
  

  