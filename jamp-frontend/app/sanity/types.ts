export type BannerSection = {
    _id: string;
    subtitle: string;
    image: string;
  };
  
  export type Showcase = {
    _key:string;
    title: string;
    description: string;
    image: string;
    aspectRatio?: '1/1' | '3/2' | '9/16' | '16/9';
    ctas: {
      text: string;
      href: string;
    }[];
  };
  
  export type ListingItem = {
    _key:string;
    title: string;
    subtitle?: string;
    image: string;
    aspectRatio: '1/1' | '3/2' | '9/16' | '16/9';
  };
  
  export type Listing = {
    _key:string;
    heading: string;
    items: ListingItem[];
  };
  
  export type SectionWithListings = {
    _key: string;
    showcases: Showcase[];
    listings: Listing[];
  };
  
  export type SectionWithoutListings = {
    _key: string;
    showcases: Showcase[];
  };
  
  export type HomePageData = {
    banner: BannerSection;
    sectionOne: SectionWithListings;
    sectionTwo: SectionWithListings;
    sectionThree: SectionWithListings;
    sectionFour: SectionWithoutListings;
  };
  