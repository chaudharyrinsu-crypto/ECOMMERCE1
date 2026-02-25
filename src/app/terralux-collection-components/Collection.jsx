'use client'
import React from 'react'
import { terraluxCollection } from '../data/Alldata'
import Link from 'next/link'

const Collection = () => {
  return (
     <section className='w-full h-full text-white pb-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2.5 w-full '>
                    {terraluxCollection.map((item,index) => (
                        <div key={index} className='h-100 lg:h-150 w-full rounded-2xl overflow-hidden relative group'>
                            <img className='object-cover h-full w-full group-hover:scale-[1.1] duration-900' src={item.image} alt="tree runner images" />
                            <p className='text-2xl md:text-3xl lg:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extralight whitespace-nowrap'>{item.title}</p>
                            <div className={`${!item.shopwomen ? 'w-full' : ''} absolute left-1/2 -translate-x-1/2 bottom-3 md:bottom-3 lg:bottom-7 whitespace-nowrap space-x-3 uppercase md:text-sm text-[12px] font-medium px-3.5`}>
                                <Link className={`${!item.shopwomen ? 'w-full block' : 'inline-block'} px-18  md:px-5 lg:px-12 py-1 lg:py-2 text-center rounded-4xl border hover:bg-white hover:text-[#212121] hover:border-none duration-500`} href='/'>{item.shopmen}</Link>
                                
                                {item.shopwomen && (<Link className= 'px-18 md:px-5 lg:px-12 py-1 lg:py-2 text-center  rounded-4xl border hover:bg-white hover:text-[#212121] hover:border-none duration-500' href='/'>{item.shopwomen}</Link>)}
                                
                            </div>
                        </div>
                    ))}
                </div>
            </section>
  )
}

export default Collection
