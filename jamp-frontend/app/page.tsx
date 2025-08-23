import { client } from '@/app/sanity/client';
import type { HomePageData } from '@/app/sanity/types';
import { HOMEPAGE_SECTIONS_QUERY } from "@/app/query/home-page-query"
import Banner from './components/homepage/banner';
import Section from './components/homepage/section';


export default async function Home() {
    const { banner, sectionOne, sectionTwo, sectionThree,sectionFour } = await client.fetch<HomePageData>(HOMEPAGE_SECTIONS_QUERY);
    console.log(sectionThree)
    console.log(sectionThree.showcases)
    return (
        <div>
            <Banner src={banner.image} subtitle={banner.subtitle} />
            <Section data={sectionOne} />
            <Section data={sectionTwo} />
            <Section data={sectionThree} className='bg-roboto-secondary-background' />
            <Section data={sectionFour} />
        </div>
    );
}
