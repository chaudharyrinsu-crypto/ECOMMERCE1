'use client'
import Link from 'next/link'
import React from 'react'

const Buttons = () => {
    return (
        <>
            <div className='mt-3 space-x-2.5 md:space-x-4  text-[14px] uppercase font-medium'>
                <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/'>
                    shop men</Link>
                <Link className='bg-white hover:bg-[#212121] hover:text-white transition py-2 px-6 rounded-4xl' href='/'>shop women</Link>
            </div>
        </>
    )
}

export default Buttons
