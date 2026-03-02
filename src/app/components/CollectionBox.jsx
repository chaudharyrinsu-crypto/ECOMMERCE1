'use client'
import React from 'react'
import { treeRunnerNZ } from '../data/Alldata'
import Link from 'next/link'

const CollectionBox = () => {
  return (
    <>
     <section className='px-3 w-full h-full text-white'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2.5 w-full py-10'>
                    {treeRunnerNZ.map((item,index) => (
                        <div key={index} className='h-full w-full rounded-2xl overflow-hidden relative group'>
                            <img className='object-cover h-full w-full group-hover:scale-[1.1] duration-900' src={item.image} alt="tree runner images" />
                            <p className='text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extralight text-center lg:whitespace-nowrap'>{item.title}</p>
                            <div className='absolute px-3 bottom-3 md:px-5 md:bottom-5 whitespace-nowrap uppercase text-sm font-medium flex justify-between gap-2.5 w-full lg:text-sm text-[12px]'>
                                <Link className='block px-4 lg:px-12 text-center py-1.5 rounded-4xl border border-white hover:bg-white hover:text-[#212121] hover:border-none duration-500 w-1/2' href='/'>Shop men</Link>
                                <Link className='block px-4 lg:px-12 text-center py-1.5 rounded-4xl border border-white hover:bg-white hover:text-[#212121] hover:border-none duration-500 w-1/2' href='/'>Shop women</Link>
                            </div>
                        </div>
                    ))}
                </div></section> 
    </>
  )
}

export default CollectionBox
