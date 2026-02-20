'use client'
import React from 'react'
import { terraluxShoeFeatures } from '../data/Alldata'
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section className=' bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl md:grid md:grid-cols-2 gap-4 block space-y-5.5'>
        <Image
          src="/terralux-feature-img.webp"
          alt="shoe"
          width={600}
          height={600}
          className="rounded-3xl h-full object-cover"
        />
        <div className='grid grid-rows-3 items-center gap-1 md:gap-0 rounded-2xl'>
          {terraluxShoeFeatures.map(item => (
            <div key={item.heading} className='space-y-2.5 md:space-y-1 lg:space-y-3 tracking-wide font-normal'>
              <h6 className='text-sm lg:text-[16px]'>{item.heading}</h6>
              <p className='text-[12px] md:text-sm font-normal text-[#575757] leading-6'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Features
