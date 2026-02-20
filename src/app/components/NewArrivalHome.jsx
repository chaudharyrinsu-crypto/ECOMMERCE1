'use client'

import React, { useEffect, useState } from 'react'
import { newArrivalShoe } from '../data/Alldata'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const NewArrivalHome = () => {
    const [mounted, setMounted] = useState(false)
    //   const [direction, setDirection] = useState('horizontal')

    useEffect(() => {
        setMounted(true)

        // const handleResize = () => {
        //   setDirection(window.innerWidth <= 760 ? 'vertical' : 'horizontal')
        // }

        // handleResize()
        // window.addEventListener('resize', handleResize)

        // return () => window.removeEventListener('resize', handleResize)
    }, [])

    // ⛔ Prevent SSR hydration mismatch
    if (!mounted) return null
    return (
        <>
            <div className="w-full pt-20">
                <h3 className="uppercase underline font-medium tracking-wider text-center text-[#212121]">
                    new arrivals
                </h3>

                <Swiper
                    modules={[Navigation]}
                    // slidesPerView={2}
                    // direction={direction}
                    breakpoints={{
                        320: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                        //   1024: { slidesPerView: 3 },
                    }}
                    navigation
                    className="w-full lg:h-full h-1/2 "
                >
                    {newArrivalShoe.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full ">
                                <img
                                    src={img}
                                    alt="new arrivals shoes"
                                    className="w-full h-full md:object-cover object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default NewArrivalHome
