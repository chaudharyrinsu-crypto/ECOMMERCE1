'use client'
import Link from 'next/link'
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';

const Cart = () => {
    const [hide,setHide]=useState(null)
    return (
        <>
            <section className='relative z-50 tracking-wide'>
                <div className={`fixed top-0 overflow-y-auto w-[40%] right-0 bg-white ${hide?" translate-x-full":"translate-x-0"} transform transition-transform  duration-500 ease-in-out`}>
                    <div className=' px-3'>
                        <ul className='py-5 after:content-[""] relative after:absolute after:bg-[#212121] after:h-1.75 after:w-full after:bottom-0 after:rounded-full after:left-1/2 after:-translate-x-1/2 flex justify-between'>
                            <li className='text-[12px]'>CART</li>
                            <li className='text-sm text-[#575757]'>You've earned free shipping!</li>
                            <li onClick={()=>setHide(true)} className='cursor-pointer'><RxCross1 /></li>
                        </ul>
                        <div className=''>
                            <div className='flex justify-between items-center py-3 '>
                                <div className='flex gap-5 '>
                                    <img className='h-20' src="https://cdn.shopify.com/s/files/1/1104/4168/files/A12464_26Q1_Dasher-NZ-Blizzard-Deep-Navy-Blizzard_PDP_LEFT.png?v=1768948183" alt="" />
                                    <div className='text-sm space-y-1'>
                                        <p className='uppercase'>Men's Dasher NZ</p>
                                        <span className='block text-[12px] text-[#575757]'>Blizzard/Deep Navy (Blizzard Sole)</span>
                                        <span className='block text-[12px] text-[#575757]'>Size: 8</span>
                                        <button className='underline text-[12px] text-[#575757]'>Remove</button>
                                    </div>
                                </div>
                                <div className='text-sm flex flex-col gap-6 text-end'>
                                    <span className='font-semibold'>$140</span>
                                    <ul className='flex justify-between gap-2.5 items-center border border-[#CDCDCD] px-3.5 py-1 rounded-2xl font-semibold'>
                                        <li><RiDeleteBinLine /></li>
                                        <li>1</li>
                                        <li>+</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='py-2 border-b-1 border-t-1 border-t-[#CDCDCD] border-b-[#CDCDCD]'>
                            <div className='bg-[#ECE9E2] py-2 px-3 rounded-xl'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className=''>
                                        <h6 className='text-sm font-semibold'>Returns Protection</h6>
                                        <span className='text-[12px] text-[#575757] block'>Buy returns protection to qualify for free returns.Does not apply to Final Sale items.</span>
                                    </div>
                                    <button className='uppercase text-[12px] whitespace-nowrap py-1 px-3 bg-[#212121] text-white rounded-2xl'>Add - $3</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-11'>
                        <div className='bg-[#ECE9E2] p-3'>
                            <div className='flex justify-between'>
                                <p className='text-sm'>Recommended for you</p>
                                <div className={`h-5.5 w-5.5 flex items-center justify-center rounded-full border`}><MdKeyboardArrowDown /></div>
                            </div>
                            <div className='p-2'>
                                <div className='flex gap-5 text-sm bg-white p-2 rounded-xl'>
                                    <img className='h-20' src="https://www.allbirds.com/cdn/shop/files/SKU-SOCKS-GLOBAL-ANKLE-BLIZZARD-1_Resize_0006_Layer-1-min.png?v=1761253065" alt="" />
                                    <div className='space-y-3'>
                                        <div className='flex justify-between'>
                                            <p className='text-[#575757]'>Anytime Ankle Sock</p>
                                            <span className='block font-semibold'>$16</span>
                                        </div>
                                        <span className='block h-3.5 w-3.5 outline outline-offset-2 rounded-full bg-gray-300'></span>
                                        <div className='flex gap-3 justify-between'>
                                            <div className='border-2 p-1 rounded-2xl'>
                                                <select className='outline-none' name="" id="">
                                                    <option value="">Size: S (W5-7)</option>
                                                    <option value="">Size: M (W8-10 / M8)</option>
                                                    <option value="">Size: L (W11 / M9-12)</option>
                                                    <option value="">Size: XL (M13-14)</option>
                                                </select>
                                            </div>
                                            <button className='font-semibold'>Add+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end gap-2'>
                                <span className='h-5.5 w-5.5 flex items-center justify-center rounded-full border'><MdKeyboardArrowLeft /></span>
                                <span className='h-5.5 w-5.5 flex items-center justify-center rounded-full border'><MdKeyboardArrowRight /></span>
                            </div>
                        </div>
                    </div>
                    <div className='px-3 py-5 bg-white flex flex-col gap-2 font-semibold'>
                        <div className='flex justify-between'>
                            <span>Subtotal</span>
                            <span>$140</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Shipping</span>
                            <span className='font-medium uppercase'>$5.00 Free</span>
                        </div>
                        <Link className='bg-[#212121] duration-500 hover:border-[#212121] hover:bg-[#6b6a6a] text-white text-center py-4 rounded-full text-[12px]' href={`/`}>CHECKOUT</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
