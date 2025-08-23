export const HOMEPAGE_SECTIONS_QUERY = `
{
  "banner": *[_type == "bannerSection"][0]{
    _id,
    subtitle,
    image
  },
  "sectionOne": *[_type == "homeSectionOne"] | order(_createdAt asc){
    _id,
    title,
    description,
    image,
    aspectRatio,
    ctas
  },
  "sectionTwo": *[_type == "homeSectionTwo"] | order(_createdAt asc){
    _id,
    heading,
    items[]{
      title,
      subtitle,
      image,
      aspectRatio
    }
  }
,
  "sectionThree": *[_type == "homeSectionThree"] | order(_createdAt asc){
    _id,
    title,
    description,
    image,
    aspectRatio,
    ctas
  },
  "sectionFour": *[_type == "homeSectionFour"] | order(_createdAt asc){
    _id,
    heading,
    items[]{
      title,
      subtitle,
      image,
      aspectRatio
    }
  },
    "sectionFive": *[_type == "homeSectionFive"] | order(_createdAt asc){
    _id,
    title,
    description,
    image,
    aspectRatio,
    ctas
  },
   "sectionSix": *[_type == "homeSectionSix"] | order(_createdAt asc){
    _id,
    heading,
    items[]{
      title,
      subtitle,
      image,
      aspectRatio
    }
  },
     "sectionSeven": *[_type == "homeSectionSeven"] | order(_createdAt asc){
    _id,
    title,
    description,
    image,
    aspectRatio,
    ctas
  },
}
`;
