'use client'
import React from 'react'
import { treeRunnerNZ } from '../data/Alldata'
import Link from 'next/link'

const CollectionBox = () => {
  return (
    <>
     <section className='px-3 w-full h-full text-white'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 h-160 w-full py-10'>
                    {treeRunnerNZ.map((item,index) => (
                        <div key={index} className='h-full w-full rounded-2xl overflow-hidden relative group'>
                            <img className='object-cover h-full w-full group-hover:scale-[1.1] duration-900' src={item.image} alt="tree runner images" />
                            <p className='text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extralight whitespace-nowrap'>{item.title}</p>
                            <div className='absolute left-1/2 -translate-x-1/2 bottom-7 whitespace-nowrap space-x-3 uppercase text-sm font-medium'>
                                <Link className='px-12 text-center py-2 rounded-4xl border hover:bg-white hover:text-[#212121] hover:border-none duration-500' href='/'>Shop men</Link>
                                <Link className=' px-12 text-center py-2 text-white rounded-4xl border hover:bg-white hover:text-[#212121] hover:border-none duration-500' href='/'>Shop women</Link>
                            </div>
                        </div>
                    ))}
                </div></section> 
    </>
  )
}

export default CollectionBox
