import type { SectionWithListings } from '@/app/sanity/types'
import { ParallelCard } from '../ui.tsx/showcase-card'
import VerticalSection from '../ui.tsx/listing'

export default function SectionOne({ data }: { data: SectionWithListings }) {

  return (
    <div>
      {data?.showcases.map((item) => (
        <ParallelCard key={item.title} {...item} />
      ))}
      <VerticalSection data={data.listings} />
    </div>
  )
}