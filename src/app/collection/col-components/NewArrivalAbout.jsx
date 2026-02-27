'use client'
import { newArrivalDescription } from '@/app/data/Alldata'
import React, { useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

const NewArrivalAbout = () => {
    const [changeArrow,setChangeArrow]=useState(true)

    return (
        <>
            <section className='leading-6.5 tracking-wide max-w-4xl mx-auto py-10 px-3'>
                <div className='space-y-5 text-center py-15'>
                    <h4 className='text-[18px] uppercase'>Mens New Arrivals</h4>
                    <p className='text-[#575757]'>Discover the latest men’s new arrivals at Allbirds—fresh, innovative styles crafted with comfort, versatility, and sustainability in mind. Explore new shoes, apparel, and accessories made from eco-friendly materials like merino wool, tree fiber, and sugarcane. Each design combines lightweight comfort with timeless style, making it easy to look and feel your best every day. Check back often for new colors, limited-edition drops, and updated takes on fan favorites, all created with the planet in mind.</p>
                </div>
                <div>
                    {newArrivalDescription.map((detail, index) => (
                        <div key={index} className='border-t border-[#575757]'>
                            <div className='flex justify-between py-7'>
                                <h4 className='text-[18px] '>{detail.heading}</h4>
                                <button onClick={()=>setChangeArrow(!changeArrow)} className='h-6 w-6 flex shrink-0 items-center justify-center rounded-full border border-[#212121]'>{changeArrow?<RiArrowDownSLine />:<RiArrowUpSLine />}</button>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default NewArrivalAbout
