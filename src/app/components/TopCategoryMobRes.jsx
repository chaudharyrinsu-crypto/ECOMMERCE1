
'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'

const TopCategoryMobRes = () => {
    return (
        <>
            <section className="w-full pt-20 ">
                <Swiper
                    // modules={[Navigation]}
                    spaceBetween={10}
                    breakpoints={{
                          320: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                    }}
                    // navigation
                    className="w-full"
                >
                    <SwiperSlide className=''>
                        <div className='w-full h-[440px] rounded-2xl overflow-hidden relative group transition-all duration-500'>
                            <img className='w-full h-full object-cover ' src='https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ__Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_5528a1d8-0426-4a8b-b0ff-eef6f5fefde4.jpg?v=1769465779&width=1024' alt="images" />
                            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                                <p className='inline-block px-5 text-center py-1 rounded-4xl border'>New Arrivals</p>
                                {/* hidden group-hover:block */}
                                <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100] transition-all duration-500'>
                                    <Link className='inline-block px-5 text-center py-1 rounded-4xl border  duration-500' href='/collection/mens-new-arrivals'>Shop Men</Link>
                                    <Link href='/collection/womens-new-arrivals' className=' inline-block px-5 text-center py-1 rounded-4xl border  duration-500'>Shop Women</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-[440px] rounded-2xl overflow-hidden relative group transition-all duration-500'>
                            <img className='w-full h-full object-cover' src='https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ__Site_Homepage_CategoryRow-02_Desktop-Mobile_2x3_e2268e64-edd7-4c51-ad30-939eb9385442.jpg?v=1769465779&width=1024' alt="image2" />
                            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                                <p className='inline-block px-5 text-center py-1 rounded-4xl border'>Mens</p>
                                {/* hidden group-hover:block */}
                                <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100] transition-all duration-500'>
                                    <Link className='inline-block px-5 text-center py-1 rounded-4xl border  duration-500' href='/collection/mens'>Shop Men</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-[440px] rounded-2xl overflow-hidden relative group transition-all duration-500'>
                            <img className='object-cover h-full w-full' src='https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ__Site_Homepage_CategoryRow-03_Desktop-Mobile_2x3_85b1d2e6-50b5-4aa9-8be1-f1f35eeb7f76.jpg?v=1769465779&width=1024' alt="images3" />
                            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                                <p className='inline-block px-5 text-center py-1 rounded-4xl border'>Womens</p>
                                <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100] transition-all duration-500'>
                                    <Link href='/collection/womens' className=' inline-block px-5 text-center py-1 rounded-4xl border  duration-500'>Shop Women</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-[440px] rounded-2xl overflow-hidden relative group transition-all duration-500'>
                            <img className='w-full h-full object-cover' src='https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ__Site_Homepage_CategoryRow-04_Desktop-Mobile_2x3_b07d5a67-c289-44f2-80c0-b5a7032299e2.jpg?v=1769465779&width=1024' alt="image4" />
                            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                                <p className='inline-block px-5 text-center py-1 rounded-4xl border'>Bestsellers</p>
                                {/* hidden group-hover:block */}
                                <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100] transition-all duration-500'>
                                    <Link className='inline-block px-5 text-center py-1 rounded-4xl border  duration-500' href='/collection/bestsellers/mens'>Shop Men</Link>
                                    <Link href='/collection/bestsellers/womens' className=' inline-block px-5 text-center py-1 rounded-4xl border  duration-500'>Shop Women</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default TopCategoryMobRes
