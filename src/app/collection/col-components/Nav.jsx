'use client'
import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from 'next/link';

const Nav = () => {
    return (
        <>
            <nav className='bg-transparent lg:bg-[#E0DACF] gap-2 flex items-center max-w-6xl mx-auto rounded-full px-4 py-0 lg:py-3 text-sm'>
                <ul className='flex lg:gap-2 lg:justify-start justify-between items-center lg:border-none border rounded-full py-1 px-2 flex-1'>
                    <div className='flex gap-2.5 items-center '>
                        <li className='lg:border text-xl lg:text-sm rounded-full h-8 w-8 flex items-center justify-center'><HiAdjustmentsHorizontal /></li>
                        <li className='uppercase lg:block hidden '>Filter <span className='lowercase text-[#575757] '>(41 products)</span></li>
                        <li className='lg:hidden block uppercase font-semibold sm:text-sm text-[12px]'>Filter and Sort</li>
                    </div>

                    <li className='block lg:hidden items-center text-[#212121]  p-1  '>
                        <Link className='h-6 w-6 flex items-center justify-center rounded-full border border-[#212121]' href='/'><RiArrowDownSLine /></Link>
                    </li>
                </ul>
                <ul className='flex gap-2 items-center w-auto justify-end'>
                    <li className='flex gap-2 items-center border border-[#212121] text-white p-1  rounded-full'>
                        <Link className='uppercase active:bg-[#212121] bg-[#212121] py-1.5 px-4 rounded-full' href='/collection/mens-new-arrivals'>men</Link>
                        <Link className='uppercase active:bg-[#212121] active:text-white bg-transparent text-[#212121] py-1.5 px-4 rounded-full' href='/collection/womens-new-arrivals'>women</Link>
                    </li>
                    <li className='hidden lg:flex gap-2 items-center border border-[#212121] text-[#212121]  p-1  rounded-full'>
                        <Link className='py-1.5 px-4 rounded-full' href='/'>Best selling</Link>
                        <Link className='h-6 w-6 flex items-center justify-center rounded-full border border-[#212121]' href='/'><RiArrowDownSLine /></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
