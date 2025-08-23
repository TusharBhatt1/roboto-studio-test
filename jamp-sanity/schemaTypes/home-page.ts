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

// Banner (with listing inside)
export const sectionOne = defineType({
  name: 'homeSectionOne',
  title: 'Home Section One',
  type: 'document',
  fields: [
    // 👇 Multiple banners allowed
    defineField({
      name: 'showcases',
      title: 'Showcases',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'showcase',
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
              validation: (Rule) => Rule.max(3),
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
        },
      ],
    }),

    // 👇 Multiple listings allowed
    defineField({
      name: 'listings',
      title: 'Listings',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'listing',
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
        },
      ],
    }),
  ],
});

export const sectionTwo = defineType({
  name: 'homeSectionTwo',
  title: 'Home Section Two',
  type: 'document',
  fields: [...sectionOne.fields],
});

export const sectionThree = defineType({
  name: 'homeSectionThree',
  title: 'Home Section Three',
  type: 'document',
  fields: [...sectionOne.fields],
});

export const sectionSeven = defineType({
  name: 'homeSectionFour',
  title: 'Home Section Four',
  type: 'document',
  fields: sectionOne.fields.filter((field) => field.name !== 'listing'),
});


