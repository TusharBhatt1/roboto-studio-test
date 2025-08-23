import { client } from '@/app/sanity/client';
import type { HomePageData } from '@/app/sanity/types';
import { HOMEPAGE_SECTIONS_QUERY } from "@/app/query/home-page-query"
import Banner from './components/homepage/banner';
import SectionOne from './components/homepage/section-one';
import SectionTwo from './components/homepage/section-two';
import SectionThree from './components/homepage/section-three';
import SectionFour from './components/homepage/section-four';
import SectionFive from './components/homepage/section-five';
import SectionSix from './components/homepage/section-six';
import SectionSeven from './components/homepage/section-seven';

export default async function Home() {
    const { banner, sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix, sectionSeven } = await client.fetch<HomePageData>(HOMEPAGE_SECTIONS_QUERY);
    return (
        <div>
            <Banner src={banner.image} subtitle={banner.subtitle} />
            <SectionOne data={sectionOne} />
            <SectionTwo data={sectionTwo} />
            <SectionThree data={sectionThree} />
            <SectionFour data={sectionFour} />
            <SectionFive data={sectionFive} />
            <SectionSix data={sectionSix} />
            <SectionSeven data={sectionSeven}/>
        </div>
    );
}
