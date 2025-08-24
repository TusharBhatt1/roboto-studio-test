import type { SectionWithListings, SectionWithoutListings } from '@/app/sanity/types'
import { ShowcaseCard } from '../ui.tsx/showcase-card'
import { Listing } from '../ui.tsx/listing'
import { AnimatedSection } from '../ui.tsx/animated-section'

export default function Section({ data, showCaseCn }: { data: SectionWithListings | SectionWithoutListings, showCaseCn?: string }) {
  return (
    <div>
      {data?.showcases.map((item, index) => (
        <AnimatedSection key={item.title} delay={index * 0.3}>
          <ShowcaseCard {...item} className={showCaseCn}/>
        </AnimatedSection>
      ))}
      {(data as SectionWithListings).listings && (
        <AnimatedSection delay={0.3}>
          <Listing data={(data as SectionWithListings).listings} />
        </AnimatedSection>
      )}
    </div>
  )
}