import type { SectionTwo } from '@/app/sanity/types'
import VerticalSection from '../ui.tsx/listing'

export default function SectionSix({ data }: { data: SectionTwo }) {
    return <VerticalSection data={data}/>
}
