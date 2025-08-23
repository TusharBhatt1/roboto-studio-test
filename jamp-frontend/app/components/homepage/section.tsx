import type { SectionWithListings, SectionWithoutListings } from '@/app/sanity/types'
import { ShowcaseCard } from '../ui.tsx/showcase-card'
import { Listing } from '../ui.tsx/listing'

export default function Section({ data, className }: { data: SectionWithListings | SectionWithoutListings, className?: string }) {
  return (
    <div className={className}>
      {data?.showcases.map((item) => (
        <ShowcaseCard key={item.title} {...item} />
      ))}
      {<Listing data={(data as SectionWithListings).listings} />}
    </div>
  )
}