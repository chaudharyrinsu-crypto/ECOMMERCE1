import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className='w-full h-full text-[#212121]'>
            <div className='block space-y-2.5 md:space-y-0 md:flex gap-2.5 md:py-0 py-5'>
                <img className='md:w-[55%] w-full rounded-2xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_LP_Split-Text_Materials_Desktop-Mobile_2x3_e97a91b5-0347-4391-8e47-d2ac6b342ab9.jpg?v=1766439767&width=1920" alt="varsity-aboutimg" />
                <div className='md:w-[45%] w-full flex flex-col gap-8 md:gap-10 lg:gap-12 tracking-wide items-center justify-center text-center p-6 md:p-8 lg:p-15 rounded-2xl'>
                    <h2 className='text-2xl'>Varsity Collection</h2>
                    <p className='text-sm leading-5.5 px-5'>Earth-friendly materials, A+ comfort, and proof that good design never gets old. It gets better..</p>
                </div>
            </div>
        </section>
    )
}

export default About
