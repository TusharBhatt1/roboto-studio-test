import type { SectionOne } from '@/app/sanity/types'
import { ParallelCard } from '../ui.tsx/parrallel-card'

export default function SectionOne({ data }: { data: SectionOne }) {

  return (
    <div>
      {data?.map((item) => (
        <ParallelCard key={item._id} {...item} />
      ))}
    </div>
  )
}