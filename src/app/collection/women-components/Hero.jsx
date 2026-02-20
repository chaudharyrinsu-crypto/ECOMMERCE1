import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='relative'>
        <Image src='/womens-new-arrivals-hero.webp' height={600} width={600} alt='mens-new-arrivals-hero' 
        className='w-full object-cover h-87.5 rounded-2xl'
        />
        <div className='absolute bottom-6 left-6 text-white tracking-wider'>
          <h4 className='text-2xl '>New Arrivals</h4>
          <p className='text-sm text-[#D8DACF]'>Start the season with comfort, style, and versatility.</p>
        </div>
      </section>
    </>
  )
}

export default Hero
