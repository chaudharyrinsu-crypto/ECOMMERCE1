'use client'
import React from 'react'
import Nav from './Nav'
import { products } from '@/app/data/Alldata'
import Link from 'next/link'

const Cards = () => {
    return (
        <section className='py-2.5'>
            <Nav />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-w-6xl mx-auto px-4 py-3.5 tracking-wider'>
                {products
                    .filter(i => i.gender === 'men' || i.gender === 'unisex')
                    .map(item => (
                        <div key={item.id} className='bg-white rounded-2xl relative hover:z-50 hover:scale-[1.055] hover:shadow-xl duration-200 group'>
                            <Link href={`/products/${item.id}`} className='block'>
                                <div className='bg-[#E0DACF] absolute top-4 left-4 px-2 py-1 rounded-2xl flex items-center justify-center text-[12px]'>NEW</div>
                                <img
                                    src={item.items[0].firstimg}
                                    alt={item.title}
                                    className='w-full object-contain h-full'
                                />
                                <div className='p-4'>
                                    <Link href='/' className='font-semibold'>{item.title}</Link>
                                    <Link href='/' className='text-sm block mt-1.5'>{item.items[0].name}</Link>
                                    <div className='flex gap-2 justify-between mt-1.5'>
                                        <div className='flex gap-2'>
                                            {item.items.slice(0, 5).map((color, index) => (
                                                <Link href='/' key={index}
                                                    style={{ backgroundColor: color.hex }}
                                                    className='h-6 w-6 rounded-full inline-block border'
                                                ></Link>
                                            ))}
                                            {item.items.length > 5 && (
                                                <Link href='/' className='underline'>+{item.items.length - 5}</Link>
                                            )}
                                        </div>
                                        <span className='text-sm font-semibold'>{item.price}</span>
                                    </div>
                                    <div className='grid grid-cols-5 gap-2 duration-200 opacity-0 group-hover:opacity-100 bg-white absolute group-hover:z-50 group-hover:shadow-xl p-4 left-0 right-0 w-full rounded-b-2xl'>
                                        {item.sizes.map((size, index) => (
                                            <Link href='/' key={index} className='border border-[#E0DACF] flex items-center justify-center text-sm p-2 tracking-tighter cursor-pointer'>{size}</Link>
                                        ))}

                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Cards