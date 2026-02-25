'use client'
import Link from 'next/link'
import React from 'react'

const DasherNz = () => {
    return (
        <>
            <section className='text-[#212121] flex flex-col gap-5 text-center'>
                <h2 className='text-4xl'>Dasher NZ</h2>
                <span className='text-sm'>Blizzard/Deep Navy (Blizzard Sole) - $140</span>
                <div className='inline-block space-x-3 uppercase text-sm font-medium'>
                    <Link className='px-5 text-center py-2 rounded-4xl border border-[#212121] hover:bg-[#212121] hover:text-white duration-500' href='/'>Shop men</Link>
                    <Link className='inline-block px-5 text-center py-2  rounded-4xl border border-[#212121] hover:bg-[#212121] hover:text-white duration-500' href='/'>Shop women</Link>
                </div>
            </section>
            
        </>
    )
}

export default DasherNz
