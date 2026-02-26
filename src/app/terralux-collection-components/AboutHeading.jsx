import Link from 'next/link'
import React from 'react'

const AboutHeading = () => {
  return (
    <section>
      <div className='flex flex-col gap-5 text-center'>
                <h2 className='text-3xl md:text-4xl'>Runner NZ Terralux™</h2>
                <span className='text-sm'>Toasted Coconut (Natural White Sole) - $135</span>
                <div className='inline-block space-x-3 uppercase text-sm font-medium'>
                    <Link className='px-5 inline-block text-center md:py-2 py-1 rounded-4xl border border-[#212121] hover:bg-[#212121] hover:text-white duration-500' href='/'>Shop men</Link>
                </div>
            </div>
    </section>
  )
}

export default AboutHeading
