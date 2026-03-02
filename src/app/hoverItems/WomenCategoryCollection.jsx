'use client'
import React from 'react'
import { customerFavorites, menShoes, topAddOns } from '../data/Alldata'
import Link from 'next/link'

const WomenCategoryCollection = ({ hoverItem }) => {
    return (
        <>
            <section
                className={`absolute top-0 left-0 z-50 w-full py-20 bg-[#ECE9E2] transition-all duration-500 ${hoverItem ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
            >
                <div className={`max-w-330 m-auto transition-all duration-700 delay-500 ${hoverItem ? "opacity-100" : "opacity-0"}`}
                >
                    <div className='bg-[#E0DACF] py-3 rounded-xl  space-x-6 text-[14px] font-medium text-center'>
                        <Link href='/'>Shoes</Link>
                        <Link href='/'>Socks & Apparel</Link>
                        <Link href='/'>Sale</Link>
                    </div>
                    <div className='grid grid-cols-4 text-[14px]'>
                        <div className='py-2 uppercase'>
                            {/* {allCollection.map(a=>(
                    <Link className='uppercase flex mt-6 font-medium hover:underline' key={a} href='/'>{a}</Link>
                ))} */}
                            <Link className=' flex mt-6 font-medium hover:underline' href='/pages/dasher-nz-collection'>Dasher NZ Collection</Link>
                            <Link className='flex mt-6 font-medium hover:underline' href='/pages/terralux-collection'>Terralux™ Collection</Link>
                            <Link className=' flex mt-6 font-medium hover:underline' href='/pages/varsity-collection'>Varsity Collection</Link>
                            <Link className=' flex mt-6 font-medium hover:underline' href='/collection/womens-new-arrivals'>New Arrivals</Link>
                            <Link className=' flex mt-6 font-medium hover:underline' href='/collection/bestsellers/womens'>Bestsellers</Link>

                        </div>
                        <div className='py-2'>
                            <Link href='/collection/womens' className='mt-6 inline-block font-medium uppercase hover:underline'>Women's Shoes</Link>
                            {menShoes.map(a => (
                                <Link className='text-[#575757] flex mt-3 hover:underline' key={a} href='/'>{a}</Link>
                            ))}
                        </div>
                        <div className='py-2'>
                            <h5 className='mt-6 uppercase font-medium'>Customer Favorites</h5>
                            {customerFavorites.map((a, index) => (
                                <Link className='text-[#575757] flex mt-3 hover:underline' key={index} href='/'>{a}</Link>
                            ))}
                        </div>
                        <div className='py-2'>
                            <h5 className='mt-6 uppercase font-medium'>Top Add-Ons</h5>
                            {topAddOns.map(a => (
                                <Link className='text-[#575757] flex mt-3 hover:underline' key={a} href='/'>{a}</Link>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default WomenCategoryCollection
