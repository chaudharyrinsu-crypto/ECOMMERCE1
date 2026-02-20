'use client'
import DasherNz from '@/app/dasher-nz-collection-components/DasherNz'
import DasherNzImg from '@/app/dasher-nz-collection-components/DasherNzImg'
import DasherNzShoeFeature from '@/app/dasher-nz-collection-components/DasherNzShoeFeature'
import DasherNzShoeImg from '@/app/dasher-nz-collection-components/DasherNzShoeImg'
import Hero from '@/app/dasher-nz-collection-components/Hero'
import Slider from '@/app/dasher-nz-collection-components/Slider'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='p-3 bg-[#ECE9E2]'>
        <Hero/>
        <Slider/>
        <DasherNz/>
        <DasherNzImg/>
        <DasherNzShoeFeature/>
        <DasherNzShoeImg/>
      </section>
    </>
  )
}

export default page
