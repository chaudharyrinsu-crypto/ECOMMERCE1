'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";
import { HiBars3BottomLeft } from "react-icons/hi2";
import MenCategoryCollection from '../hoverItems/MenCategoryCollection';
import Allbirds from './Allbirds';
import { CartContext } from '../context/CartContext';
import WomenCategoryCollection from '../hoverItems/WomenCategoryCollection';
import { RiArrowDropRightLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
    const { state, dispatch } = useContext(CartContext)
    const [hoverItem, setHoverItem] = useState(null)
    const [category, setCategory] = useState(null)
    return (
        <>

            <section onMouseLeave={() => setHoverItem(null)} className='relative '>
                {/* mobile res  */}
                {category && (
                    <div className="fixed inset-0 bg-[#ECE9E2] z-40 
                  flex flex-col justify-start 
                  px-6 pt-[110px] gap-8 
                  uppercase text-[14px] font-medium lg:hidden">

                        <div className="flex justify-between">
                            <span>men</span>
                            <RiArrowDropRightLine className="text-xl border rounded-full" />
                        </div>

                        <div className="flex justify-between">
                            <span>women</span>
                            <RiArrowDropRightLine className="text-xl border rounded-full" />
                        </div>

                        <div className="flex justify-between">
                            <span>sale</span>
                            <RiArrowDropRightLine className="text-xl border rounded-full" />
                        </div>

                    </div>
                )}
                <div className={`absolute left-0 w-full  ${hoverItem ? "top-[100%] visible" : "top-[90%] invisible pointer-events-none"} transition-all duration-500`}>
                    <MenCategoryCollection hoverItem={hoverItem === 'men'} />
                </div>
                <div className={`absolute left-0 w-full  ${hoverItem ? "top-[100%] visible" : "top-[90%] invisible pointer-events-none"} transition-all duration-500`}>
                    <WomenCategoryCollection hoverItem={hoverItem === 'women'} />
                </div>
                <div className='relative'>

                </div>
                <header className='capitalize relative z-[100] bg-[#212121] text-[14px] text-white text-center py-1'>
                    <p >shop new arrivals. <Link className='underline' href="/">shop men</Link> | <Link className='underline' href="/">shop women</Link></p>
                </header>

                <nav className='px-5'>
                    <div className='relative max-w-328 mx-auto'>
                        <div className='w-full mx-auto absolute top-5 right-0 z-50 bg-white rounded-xl sm:overflow-hidden overflow-x-auto shadow'>
                            <div className='w-full flex justify-between items-center px-3 py-2 lg:px-5 lg:py-3'>
                                <div onClick={() => setCategory(!category)} className='cursor-pointer text-xl font-bold block lg:hidden'>{category ? <RxCross1 /> : <HiBars3BottomLeft />}</div>
                                <Allbirds />
                                <div className='uppercase text-[14px] font-medium space-x-6 lg:block hidden transition-all duration-500'>
                                    <Link onMouseEnter={() => setHoverItem('men')} className='transition-all duration-500' href='/'>men</Link>

                                    <Link onMouseEnter={() => setHoverItem('women')} href='/'>women</Link>
                                    <Link href='/'>sale</Link>
                                </div>


                                <div className='text-[18px] flex gap-5'>
                                    <Link className='text-[14px] hidden lg:block' href='/'>About</Link>
                                    <Link href='/'><IoSearchOutline /></Link>
                                    <button onClick={() => dispatch({ type: 'OPEN_CART' })} className='relative cursor-pointer'><BsMinecart />{state.cart.length > 0 && (
                                        <span className='absolute -top-2 -right-3 h-4 w-4 bg-[#212121] text-white rounded-full flex items-center justify-center text-[10px]'>{state.cart.length}</span>
                                    )}</button>
                                </div>
                            </div>
                            <div className={`bg-[#ECE9E2] text-[12px] space-x-5 lg:hidden block px-3 py-2 lg:px-5 lg:py-3 md:text-center ${category ? 'hidden' : 'block'}`}>
                                <Link href={`/collection/mens`}>MEN'S</Link>
                                <Link href={`/collection/womens`}>WOMEN'S</Link>
                                <Link href={`/collection/mens-new-arrivals`}>NEWARRIVALS</Link>
                                <Link href={`/collection/bestsellers/mens`}>BEST SELLERS</Link>
                            </div>
                        </div>

                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header 