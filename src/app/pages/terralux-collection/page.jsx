import About from '@/app/terralux-collection-components/About'
import AboutHeading from '@/app/terralux-collection-components/AboutHeading'
import Card from '@/app/terralux-collection-components/Card'
import Collection from '@/app/terralux-collection-components/Collection'
import Features from '@/app/terralux-collection-components/Features'
import Hero from '@/app/terralux-collection-components/Hero'
import Slider from '@/app/terralux-collection-components/Slider'
import React from 'react'

const page = () => {
  return (
    <section className='p-3 bg-[#ECE9E2]'>
      <Hero/>
      <Collection/>
      <Features/>
      <Slider/>
      <AboutHeading/>
      <About/>
      <Card/>
    </section>
  )
}

export default page
