import About from '@/app/varsity-collection-components/About'
import BigImg from '@/app/varsity-collection-components/BigImg'
import Hero from '@/app/varsity-collection-components/Hero'
import React from 'react'

const page = () => {
  return (
    <section className='p-3 bg-[#ECE9E2]'>
      <Hero/>
      <About/>
      <BigImg/>
    </section>
  )
}

export default page
