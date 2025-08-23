"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
  title: string;
  href: string;
}
export function Button({ title, href }: Props) {
  const router= useRouter()
  return (
    <button onClick={()=>router.push(href)} className='text-roboto-secondary-gray border-2 border-roboto-secondary-gray'>
      {title}
    </button>
  )
}
