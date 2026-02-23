import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from 'next/link';

const Nav = () => {
  return (
    <>
       <nav className='bg-[#E0DACF] flex justify-between items-center max-w-6xl mx-auto rounded-full px-4 py-3 text-sm'>
                <ul className='flex gap-2 items-center'>
                    <li className='border rounded-full h-8 w-8 flex items-center justify-center'><HiAdjustmentsHorizontal /></li>
                    <li className='uppercase'>Filter <span className='lowercase text-[#575757] '>(41 products)</span></li>
                </ul>
                <ul className='flex gap-2 items-center'>
                    <li className='flex gap-2 items-center border border-[#121212] text-white p-1  rounded-full'>
                        <Link className='uppercase active:bg-[#121212] bg-[#121212] py-1.5 px-4 rounded-full' href='/'>men</Link>
                        <Link className='uppercase active:bg-[#121212] active:text-white bg-transparent text-[#121212] py-1.5 px-4 rounded-full' href='/'>women</Link>
                    </li>
                    <li className='flex gap-2 items-center border border-[#121212] text-[#121212]  p-1  rounded-full'>
                        <Link className='py-1.5 px-4 rounded-full' href='/'>Best selling</Link>
                        <Link className='h-6 w-6 flex items-center justify-center rounded-full border border-[#121212]' href='/'><RiArrowDownSLine /></Link>
                    </li>
                </ul>
            </nav>
    </>
  )
}

export default Nav
