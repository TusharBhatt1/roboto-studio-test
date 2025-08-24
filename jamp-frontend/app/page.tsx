import { client } from '@/app/sanity/client';
import type { HomePageData } from '@/app/sanity/types';
import { HOMEPAGE_SECTIONS_QUERY } from "@/app/query/home-page-query"
import Banner from './components/homepage/banner';
import Section from './components/homepage/section';
import { AnimatedSection } from './components/ui.tsx/animated-section';

export default async function Home() {
    const { banner, sectionOne, sectionTwo, sectionThree,sectionFour } = await client.fetch<HomePageData>(HOMEPAGE_SECTIONS_QUERY);

    return (
        <div>
            <Banner src={banner.image} subtitle={banner.subtitle} />
            <AnimatedSection delay={0.1}>
                <Section data={sectionOne} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <Section data={sectionTwo} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <Section data={sectionThree} showCaseCn='bg-roboto-secondary-background' />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <Section data={sectionFour} />
            </AnimatedSection>
        </div>
    );
}
