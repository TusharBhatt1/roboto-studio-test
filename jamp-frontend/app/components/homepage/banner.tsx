import { urlFor } from '@/app/sanity/lib';
import Image from 'next/image';
import React from 'react'
import { AnimatedSection } from '../ui.tsx/animated-section';

interface Props {
  src: string;
  subtitle: string;
}
export default function Banner({ src, subtitle }: Props) {
  return (
    <AnimatedSection>
      <div className='space-y-3 p-4 pt-0'>
        <Image src={urlFor(src).url()} alt={subtitle} width={1400} height={700} />
        <p className='text-roboto-gray text-center'>{subtitle}</p>
      </div>
    </AnimatedSection>
  )
}
