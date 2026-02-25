'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import CategoryCollection from '../hoverItems/CategoryCollection';
import Allbirds from './Allbirds';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <>
            <a href="https://www.allbirds.com/">link</a>
            <header className='capitalize bg-[#212121] text-[14px] text-white text-center py-1'>
                <p >shop new arrivals. <Link className='underline' href="/">shop men</Link> | <Link className='underline' href="/">shop women</Link></p>
            </header>
            <div className="relative">
                {/* <CategoryCollection /> */}
            </div>
            <nav className='relative max-w-328 mx-auto  '>
                <div className='w-full mx-auto absolute top-5 right-0 z-50  px-5 py-3 rounded-xl  bg-white flex justify-between items-center shadow '>
                    {/* <Link href='/'>allbirds</Link> */}
                    <Allbirds />

                    <div className='uppercase text-[14px] font-medium space-x-6 md:inline-block hidden'>
                        <Link href='/'>men</Link>

                        <Link href='/'>women</Link>
                        <Link href='/'>sale</Link>
                    </div>
                    <div className='text-[18px] md:flex gap-5  hidden'>
                        <Link className='text-[14px]' href='/'>About</Link>
                        <Link href='/'><IoSearchOutline /></Link>
                        <Link onClick={()=>dispatch({type:'OPEN_CART'})} className='relative' href='/'><BsMinecart />{state.cart.length > 0 && (
                            <span className='absolute -top-2 -right-3 h-4 w-4 bg-[#212121] text-white rounded-full flex items-center justify-center text-[10px]'>{state.cart.length}</span>
                        )}</Link>
                    </div>
                    <div className='cursor-pointer text-2xl md:hidden'><HiMiniBars3CenterLeft /></div>
                </div>
            </nav>
        </>
    )
}

export default Header
