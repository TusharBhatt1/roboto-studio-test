import { urlFor } from '@/app/sanity/lib';
import Image from 'next/image';
import React from 'react'
interface Props {
  src: string;
  subtitle: string;
}
export default function Banner({ src, subtitle }: Props) {
  return (
    <div className='space-y-3 p-4 pt-0'>
      <Image src={urlFor(src).url()} alt={subtitle} width={1400} height={700} />
      <p className='text-roboto-gray text-center'>{subtitle}</p>
    </div>
  )
}
