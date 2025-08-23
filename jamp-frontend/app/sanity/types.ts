export type BannerSection = {
    _id: string;
    subtitle: string;
    image: string;
};

export type SectionOne = {
    _id: string;
    title: string;
    description: string;
    image: string;
    aspectRatio?: '1/1' | '3/2' | '9/16' | '16/9';
    ctas: {
        text: string;
        href: string;
    }[];
}[];

export type SectionTwoItem = {
    title: string;
    subtitle?: string;
    image: string;
    aspectRatio?: '1/1' | '3/2' | '9/16' | '16/9';
};

export type SectionTwo = {
    _id: string;
    heading: string;
    items: SectionTwoItem[];
}[];


export type HomePageData = {
    banner: BannerSection;
    sectionOne: SectionOne;
    sectionTwo: SectionTwo;
    sectionThree: SectionOne;
    sectionFour: SectionTwo;
    sectionFive: SectionOne;
    sectionSix: SectionTwo;
    sectionSeven: SectionOne
};
