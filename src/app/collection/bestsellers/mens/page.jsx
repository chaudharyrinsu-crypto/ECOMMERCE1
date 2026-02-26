'use client'
import React from 'react'
import { products } from '@/app/data/Alldata'
import Link from 'next/link'
import Nav from '../../mens-new-arrivals-components/Nav'
import Image from 'next/image'

const Cards = () => {
    return (
        <>
            <section className='p-3 bg-[#ECE9E2]'>
                <div className='relative'>
                <Image src='/bestsllers-mens-hero.webp' height={600} width={600} alt='mens-new-arrivals-hero'
                    className='w-full object-cover h-87.5 rounded-2xl'
                />
                <div className='absolute bottom-6 left-6 right-6 text-white tracking-wider'>
                    <h4 className='text-xl md:text-2xl'>Men's Bestsellers</h4>
                    <p className='text-[12px] md:text-sm text-[#D8DACF]'>Explore our most-loved men’s shoes, crafted with eco-friendly materials and designed for exceptional comfort and style. </p>
                </div>
                </div>
            </section>
            <section className='py-2.5 bg-[#ECE9E2]'>
                <Nav />
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-w-6xl mx-auto px-4 py-3.5 tracking-wider'>
                    {products
                        .filter(i => i.gender === 'men' && i.badge === 'newarrivalshoe').slice(0, 12)
                        .map((item, index) => (
                            <div key={index} className='bg-white rounded-2xl relative hover:z-50 hover:scale-[1.055] hover:shadow-xl duration-200 group'>
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
        </>
    )
}

export default Cards