import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className='relative h-45 lg:h-130 w-full rounded-2xl overflow-hidden'>
          <img className='w-full h-full object-cover' src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_LandingPage-Hero_Desktop_16x9_dcf7c25a-b129-4f74-a190-f12e5fd643e5.jpg?v=1770058005&width=2560" alt="" />
           <div className='mt-3 space-x-2 md:space-x-4 text-[12px] lg:text-[14px] uppercase font-medium absolute bottom-16 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 whitespace-nowrap'>
                    <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/'>
                        shop men</Link>
                    <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/'>shop women</Link>
                </div>
        </section>
    </>
  )
}

export default Hero
