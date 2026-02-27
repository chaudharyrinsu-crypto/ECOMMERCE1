'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import { useRef, useState } from 'react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { newArrivashoeItem, products } from '../data/Alldata'
import Link from 'next/link'
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";

const NewArrivalitems = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    return (
        <>
            <section className='px-3 text-sm w-full relative md:py-10 '>
                <div className='flex justify-between px-3'>
                    <div className='underline underline-offset-8 decoration-2 text-[16px] font-medium  '>NEW ARRIVALS</div>
                    {/* Custom navigation buttons */}
                    <div className="md:flex hidden gap-2 items-center text-[18px]">
                        <button ref={prevRef} disabled={isBeginning} className={`h-9 w-9 rounded-full cursor-pointer flex items-center justify-center shadow ${isBeginning ? 'border border-gray-400 text-gray-400' : 'border border-[#212121] text-[#212121]'}`}>
                            <LiaAngleLeftSolid />
                        </button>
                        <button disabled={isEnd} ref={nextRef} className={`h-9 w-9 rounded-full cursor-pointer flex items-center justify-center shadow ${isEnd ? 'border border-gray-400 text-gray-400' : 'border border-[#212121] text-[#212121]'}`}><LiaAngleRightSolid /></button>
                    </div>
                </div>
                <div className='pt-4'>
                    <Swiper
                        // modules={[Pagination, Navigation]}
                        modules={[Navigation]}
                        slidesPerView={3.5}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2.2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3.5,
                                spaceBetween: 10,
                            },
                        }}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }}
                        onSwiper={(swiper) => {
                            setIsBeginning(swiper.isBeginning)
                            setIsEnd(swiper.isEnd)
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning)
                            setIsEnd(swiper.isEnd)
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        className="w-full h-full new-arrival-swiper "
                    >
                        {products.map((item, i) => (
                            // newArrivashoeItem
                            <SwiperSlide
                                key={i}
                                className="flex items-center justify-center bg-white rounded-2xl py-5 "
                            >
                                <Link href={`/products/${item.id}`} className=' '>
                                    <img className='object-cover h-full w-full' src={item.items[0].firstimg} alt="images" />
                                    <div className='px-5 space-y-2'>
                                        <p className='uppercase text-[14px]'>{item.title}</p>
                                        <p>{item.items[0].name}</p>
                                        <div className='flex justify-between items-center pt-2 pl-1'>
                                            <span style={{ backgroundColor: item.items[0].hex }} className={`h-5 w-5 rounded-full border  border-black outline outline-offset-3`}></span>
                                            <span className='text-black font-semibold '>{item.price}</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/*               
                <div className='grid grid-cols-4 gap-2.5 h-110 w-full'>
                    {topCategory.map(item => (
                        <div key={item.id} className='h-full w-full  overflow-hidden relative group hover:rounded-full transition-all duration-500'>
                            
                            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                                
                            </div>
                        </div>
                    ))}
                </div> */}

        </>
    )
}

export default NewArrivalitems
