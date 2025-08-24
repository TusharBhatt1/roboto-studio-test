import { client } from '@/app/sanity/client';
import type { HomePageData } from '@/app/sanity/types';
import { HOMEPAGE_SECTIONS_QUERY } from "@/app/query/home-page-query"
import Banner from '@/app/components/homepage/banner';
import Section from '@/app/components/homepage/section';
import { AnimatedSection } from '@/app/components/ui.tsx/animated-section';

export default async function HomePage() {
  const { banner, sectionOne, sectionTwo, sectionThree, sectionFour } = await client.fetch<HomePageData>(HOMEPAGE_SECTIONS_QUERY);
    return (
        <div>
            <Banner src={banner.image} subtitle={banner.subtitle} />
            <AnimatedSection>
                <Section data={sectionOne} />
            </AnimatedSection>
            <AnimatedSection>
                <Section data={sectionTwo} />
            </AnimatedSection>
            <AnimatedSection>
                <Section data={sectionThree} showCaseCn='bg-roboto-secondary-dark-background' />
            </AnimatedSection>
            <AnimatedSection >
                <Section data={sectionFour} />
            </AnimatedSection>
        </div>
    );
}
