export const HOMEPAGE_SECTIONS_QUERY = /* groq */ `
{
  "banner": *[_type == "bannerSection"][0]{
  _id,
    subtitle,
    "image": image.asset->url
  },

  "sectionOne": *[_type == "homeSectionOne"][0]{
    showcases[]{
    _key,
      title,
      description,
      "image": image.asset->url,
      ctas[]{ text, href }
    },
    listings[]{
     _key,
      heading,
      items[]{
       _key,
        title,
        subtitle,
        "image": image.asset->url,
        
      }
    }
  },

  "sectionTwo": *[_type == "homeSectionTwo"][0]{
    showcases[]{
      _key,
      title,
      description,
      "image": image.asset->url,
      ctas[]{ text, href }
    },
    listings[]{
      _key,
      heading,
      items[]{
       _key,
        title,
        subtitle,
        "image": image.asset->url,
        
      }
    }
  },

  "sectionThree": *[_type == "homeSectionThree"][0]{
    showcases[]{
      _key,
      title,
      description,
      "image": image.asset->url,
      ctas[]{ text, href }
    },
    listings[]{
      _key,
      heading,
      items[]{
      _key,
        title,
        subtitle,
        "image": image.asset->url
      }
    }
  },
  "sectionFour": *[_type == "homeSectionFour"][0]{
    showcases[]{
      _key,
      title,
      description,
      "image": image.asset->url,
      ctas[]{ text, href }
    }
  }
}
`
