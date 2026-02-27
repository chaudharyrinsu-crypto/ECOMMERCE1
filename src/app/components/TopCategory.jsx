'use client'
import React from 'react'
import Link from 'next/link'
import TopCategoryMobRes from './TopCategoryMobRes'


const TopCategory = () => {
     
    return (
        <>
            <section className='px-3 py-5 w-full md:block hidden'>
                <div className='grid grid-cols-4 gap-2.5 h-110 w-full'>
                    <div className='h-full w-full rounded-2xl overflow-hidden relative group hover:rounded-full transition-all duration-500'>
                        <img className='object-cover h-full w-full' src='https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ__Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_5528a1d8-0426-4a8b-b0ff-eef6f5fefde4.jpg?v=1769465779&width=1024' alt="images" />
                        <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                            <p className='inline-block px-5 text-center py-1 rounded-4xl border'>New Arrivals</p>
                            <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100] transition-all duration-500'>
                                <Link className='inline-block px-5 text-center py-1 rounded-4xl border  duration-500' href='/collection/mens-new-arrivals'>Shop Men</Link>
                                <Link href='/collection/womens-new-arrivals' className=' inline-block px-5 text-center py-1 rounded-4xl border  duration-500'>Shop Women</Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-full rounded-2xl overflow-hidden relative group hover:rounded-full transition-all duration-500'>
                        <img className='object-cover h-full w-full' src='https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ__Site_Homepage_CategoryRow-02_Desktop-Mobile_2x3_e2268e64-edd7-4c51-ad30-939eb9385442.jpg?v=1769465779&width=1024' alt="image2" />
                        <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                            <p className='inline-block px-5 text-center py-1 rounded-4xl border'>Mens</p>
                            <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100] transition-all duration-500'>
                                <Link className='inline-block px-5 text-center py-1 rounded-4xl border  duration-500' href='/collection/mens'>Shop Men</Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-full rounded-2xl overflow-hidden relative group hover:rounded-full transition-all duration-500'>
                        <img className='object-cover h-full w-full' src='https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ__Site_Homepage_CategoryRow-03_Desktop-Mobile_2x3_85b1d2e6-50b5-4aa9-8be1-f1f35eeb7f76.jpg?v=1769465779&width=1024' alt="images3" />
                        <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                            <p className='inline-block px-5 text-center py-1 rounded-4xl border'>Womens</p>
                            <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100] transition-all duration-500'>
                                <Link href='/collection/womens' className=' inline-block px-5 text-center py-1 rounded-4xl border  duration-500'>Shop Women</Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-full rounded-2xl overflow-hidden relative group hover:rounded-full transition-all duration-500'>
                        <img className='object-cover h-full w-full' src='https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ__Site_Homepage_CategoryRow-04_Desktop-Mobile_2x3_b07d5a67-c289-44f2-80c0-b5a7032299e2.jpg?v=1769465779&width=1024' alt="image4" />
                        <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                            <p className='inline-block px-5 text-center py-1 rounded-4xl border'>Bestsellers</p>
                            <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100] transition-all duration-500'>
                                <Link className='inline-block px-5 text-center py-1 rounded-4xl border  duration-500' href='/collection/bestsellers/mens'>Shop Men</Link>
                                <Link href='/collection/bestsellers/womens' className=' inline-block px-5 text-center py-1 rounded-4xl border  duration-500'>Shop Women</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TopCategoryMobRes/>
           
        </>
    )
}

export default TopCategory
