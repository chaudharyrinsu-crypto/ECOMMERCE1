'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const HeroSection = () => {
    return (
        <>
            <section className="px-3 pt-3 md:font-medium font-normal text-[#212121]">
                <div className="relative h-45 lg:h-130 w-full rounded-2xl overflow-hidden">
                    <Image src="/hero.jpg" fill alt="heroimage" className="object-cover rounded-2xl" />
                    <div className='absolute lg:right-16 z-10 lg:bottom-19 right-5 bottom-10'>
                        <div className='flex flex-col gap-3 md:gap-4 text-end tracking-wider'>
                            <p className='uppercase text-white text-sm font-normal'>all new dasher n2 collection</p>
                            <h1 className='capitalize text-white text-2xl '>Widely comfortable. super natural</h1>
                            <div className='mt-3 space-x-2.5 md:space-x-4  text-[14px] uppercase font-medium'>
                                <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/collection/mens-new-arrivals'>
                                    shop men</Link>
                                <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/collection/womens-new-arrivals'>shop women</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='relative h-45 lg:h-130 w-full rounded-2xl overflow-hidden'>
                <Image src="/hero.jpg" fill alt="heroimage" className="object-cover rounded-2xl" />
                <div className='mt-3 space-x-2 md:space-x-4 text-[12px] lg:text-[14px] uppercase font-medium absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 whitespace-nowrap '>
                 <p className='uppercase text-white text-sm font-normal'>all new dasher n2 collection</p>
                            <h1 className='capitalize text-white text-2xl '>Widely comfortable. super natural</h1>
                    <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/'>
                        shop men</Link>
                    <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/'>shop women</Link>
                </div>
            </section> */}
        </>
    )
}

export default HeroSection
