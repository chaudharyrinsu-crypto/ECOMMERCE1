import Link from 'next/link'
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
    return (
        <>
            <section className='relative z-50 tracking-wide'>
                <div className='absolute w-[40%] right-0 bg-white px-3'>
                    <ul className='py-5 after:content-[""] relative after:absolute after:bg-[#212121] after:h-1.75 after:w-full after:bottom-0 after:rounded-full after:left-1/2 after:-translate-x-1/2 flex justify-between'>
                        <li className='text-[12px]'>CART</li>
                        <li className='text-sm text-[#575757]'>You've earned free shipping!</li>
                        <li><RxCross1 /></li>
                    </ul>
                    <div className=''>
                        <div className='flex justify-between items-center py-4 '>
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
                                <span>$140</span>
                                <ul className='flex justify-between gap-2.5 items-center border border-[#CDCDCD] px-3.5 py-1 rounded-2xl'>
                                    <li><RiDeleteBinLine /></li>
                                    <li>1</li>
                                    <li>+</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 border-b-1 border-t-1 border-t-[#CDCDCD] border-b-[#CDCDCD]'>
                        <div className='bg-[#ECE9E2] p-3 rounded-xl'>
                            <div className='flex items-center justify-between gap-4'>
                                <div className=''>
                                    <h6 className='text-sm'>Returns Protection</h6>
                                    <span className='text-[12px] text-[#575757] block'>Buy returns protection to qualify for free returns.Does not apply to Final Sale items.</span>
                                </div>
                                <button className='uppercase text-[12px] whitespace-nowrap py-1 px-3 bg-[#212121] text-white rounded-2xl'>Add - $3</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
