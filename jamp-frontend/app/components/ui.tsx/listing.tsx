import { urlFor } from '@/app/sanity/lib'
import type { Listing } from '@/app/sanity/types'
import Image from 'next/image'
import React from 'react'

export function Listing({ data }: { data: Listing[] }) {
    return (
        <div className='bg-roboto-background p-4 flex flex-col items-center gap-7 py-7 sm:py-14'>
            {data?.map(({ _key, heading, items }) => (
                <div key={_key} className='space-y-5'>
                    <h2 className='text-center text-lg'>{heading}</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center sm:gap-7'>
                        {items.map(({ image, title, subtitle }, i) => (
                            <div key={`${title}- ${i}`} className='text-roboto-gray text-center flex flex-col'>
                                <Image src={urlFor(image).url()} className='aspect-square mb-1' alt={title} height={250} width={250} loading="lazy" />
                                <p className='font-semibold'>{title}</p>
                                <p>{subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
