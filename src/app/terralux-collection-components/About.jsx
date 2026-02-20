import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className='w-full h-full text-[#212121]'>
            <div className='flex flex-col gap-5 text-center'>
                <h2 className='text-3xl md:text-4xl'>Runner NZ Terralux™</h2>
                <span className='text-sm'>Toasted Coconut (Natural White Sole) - $135</span>
                <div className='inline-block space-x-3 uppercase text-sm font-medium'>
                    <Link className='px-5 inline-block text-center md:py-2 py-1 rounded-4xl border border-[#212121] hover:bg-[#212121] hover:text-white duration-500' href='/'>Shop men</Link>
                </div>
            </div>
            <p className='text-center py-5 md:py-10 text-3xl md:text-4xl md:px-0 px-10'>You Won't Believe It's Not Leather.</p>
            <div className='block space-y-2.5 md:space-y-0 md:flex gap-2.5 md:py-0 py-5'>
                <img className='md:w-[55%] w-full rounded-2xl' src="https://www.allbirds.com/cdn/shop/files/26Q1-Terralux_LP_Cruiser_Split-Text_AssetName_Desktop-Mobile_2x3-2.jpg?v=1769734437&width=1920" alt="aboutimg" />
                <div className='md:w-[45%] w-full bg-white flex flex-col gap-8 md:gap-10 lg:gap-12 tracking-wide items-center justify-center text-center p-6 md:p-8 lg:p-15 rounded-2xl'>
                    <h2 className='text-2xl'>Soft, strong, and seriously comfortable.</h2>
                    <p className='text-sm leading-5.5 px-5'>The INNOVERA™ upper looks and feels supple like leather—but it’s lighter, stronger, and made from plant protein and post-consumer waste, with over 80% renewable carbon content. So you can dress up in sneaker-level comfort. Made from plants, not compromises.</p>
                </div>
            </div>
        </section>
    )
}

export default About
