'use client'
import React from 'react'
import { dasherNzShoe } from '../data/Alldata'
import Link from 'next/link'

const DasherNzImg = () => {
    return (
        <>
            <section className='grid grid-cols-2 gap-2.5 text-white pt-10'>
                {dasherNzShoe.map((item,index) => (
                    <div key={index} className='relative text-center'>
                        <img className='rounded-2xl' src={item.image} alt="dasherImg" />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-8'>
                            <h2 className='text-4xl'>{item.title}</h2>
                            <p className=''>{item.description}</p>
                            <div className='flex gap-2 whitespace-nowrap uppercase text-sm font-medium text-[#212121]'>
                                <Link className='bg-white px-12 text-center py-2 rounded-4xl border hover:bg-[#212121] hover:text-white border-none duration-500' href='/'>Shop men</Link>
                                <Link className='bg-white px-12 text-center py-2 rounded-4xl border hover:bg-[#212121] hover:text-white border-none duration-500' href='/'>Shop women</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <div className='block space-y-4 md:flex justify justify-around max-w-5xl mx-auto md:gap-20 lg:gap-25 py-12 md:px-10 md:py-20 leading-5 text-start'>
                <p className='text-[12px] w-full md:max-w-[30%] tracking-wider'>DRIVEN BY A BELIEF IN BETTER, WE TURNED TO NATURE FOR ANSWERS.</p>
                <p className='text-sm md:text-xl lg:text-2xl w-full md:max-w-[70%]'>From sugarcane to tree fiber to responsibly-sourced Merino wool, we’re finding new uses for materials that nature has already perfected. It’s part of our commitment to doing better things in a better way, while still making the most comfortable shoes on the planet.</p>
            </div>
        </>
    )
}

export default DasherNzImg
