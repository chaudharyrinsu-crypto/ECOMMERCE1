'use client'
import React from 'react'
import Hero from '../women-components/Hero'
import Cards from '../women-components/Cards'
import NewArrivalAbout from '../col-components/NewArrivalAbout'

const page = () => {
  return (
    <section className='p-3 bg-[#ECE9E2]'>
      <Hero/>
      <Cards/>
      <NewArrivalAbout/>
    </section>
  )
}

export default page
