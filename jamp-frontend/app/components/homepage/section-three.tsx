import type { SectionOne } from '@/app/sanity/types'
import { ParallelCard } from '../ui.tsx/showcase-card'

export default function SectionThree({ data }: { data: SectionOne }) {

  return (
    <div className='bg-roboto-secondary-background'>
      {data?.map((item) => (
        <ParallelCard key={item._id} {...item} />
      ))}
    </div>
  )
}