import type { SectionTwo } from '@/app/sanity/types'
import VerticalSection from '../ui.tsx/vertical-section'

export default function SectionTwo({ data }: { data: SectionTwo }) {
    return <VerticalSection data={data}/>
}
