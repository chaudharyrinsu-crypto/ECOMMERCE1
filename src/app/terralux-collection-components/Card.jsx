'use client'
import React, { useState } from 'react'
import { terraluxCardImg } from '../data/Alldata'
import Link from 'next/link'
import { IoBagOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Card = () => {
    const [activeindex, setactiveindex] = useState([])
    const handleBoxClick = (index) => {
        setactiveindex(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index])
    }
    const handleCrossClick = (index) => {
        setactiveindex(prev => prev.filter(i => i !== index))
    }
    return (
        <>
            <section>
                <p className='text-3xl lg:text-4xl px-5 md:py-11 py-7 text-center'>Serious Style. Wildly Comfortable.</p>
                <div className='md:grid md:grid-cols-2 grid-cols-1 space-y-2.5 md:gap-2.5'>
                    {terraluxCardImg.map((item, index) => (
                        <div key={index} className='tracking-wide'>
                            <div className='relative'>
                                <img className='rounded-2xl object-cover' src={item.image} alt="terralux shoe" />
                                <div className={`${activeindex.includes(index) ? 'block' : 'hidden'} bg-white absolute z-100 bottom-2.5 w-[97%] rounded-xl px-4 py-4 left-1/2 -translate-x-1/2 space-y-3.5`}>
                                    <div className='flex justify-between uppercase text-sm font-medium'>
                                        <h2 className=''>{item.title}</h2>
                                        <span>{item.price}</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span style={{ backgroundColor: item.colorcode }} className="h-4 w-4 rounded-full border inline-block"></span>
                                        <span className='text-[12px]'>{item.color}</span>
                                    </div>
                                    <Link href='/' className='uppercase border w-full inline-block p-1.5 rounded-2xl text-[12px] text-center hover:bg-[#212121] duration-200 hover:text-white'>shop now</Link>
                                </div>
                                <div title='Close Quick View' onClick={() => handleCrossClick(index)} className={`absolute ${activeindex.includes(index) ? 'opacity-100' : 'opacity-0'} top-3 right-3 h-9 w-9 bg-white rounded-full border flex items-center cursor-pointer justify-center`}><RxCross1 /></div>
                                <div title='Open Quick View' onClick={() => handleBoxClick(index)} className='absolute bottom-3 right-3 h-8 w-8 bg-white rounded-full border flex items-center cursor-pointer justify-center'><IoBagOutline /></div>

                            </div>
                            <div className='text-center space-y-2 space-x-10 w-[70%] mx-auto pt-8 pb-20 md:pb-10 lg:pb-15'>
                                <h6 className=''>{item.feature}</h6>
                                <p className='text-[#575757] text-sm leading-5'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Card
