'use client'
import React from 'react'

const Decription = () => {
  return (
    <>
     <ul className='grid grid-cols-1 md:grid-cols-3 gap-3 bg-white p-6 rounded-2xl'>
                    <li>
                        <h3 className='pb-2'>THE DETAILS</h3>
                        <p className='text-sm text-[#575757] tracking-wide leading-6'>Crafted using bio-fabrication, designed for movement, and built for modern ambition, the Cruiser Terralux™ combines iconic Allbirds comfort with our most refined styling to date—because comfort doesn’t have to be casual.</p>
                    </li>
                    <li>
                        <h3 className='pb-2'>MATERIALLY BETTER</h3>
                        <p className='text-sm text-[#575757] tracking-wide leading-6'>We partnered with Modern Meadow—a pioneer in synthetic biology and material science—to bring INNOVERA™ to footwear for the first time. It’s crafted from plant-based proteins, biopolymers, and post-consumer waste for the look and feel of leather with a lighter footprint.</p>
                    </li>
                    <li>
                        <h3 className='pb-2'>WASH & CARE</h3>
                        <p className='text-sm text-[#575757] tracking-wide leading-6'>We recommend spot cleaning with warm water and a gentle soap whenever your shoes need a brush up.</p>
                    </li>
                </ul> 
    </>
  )
}

export default Decription
