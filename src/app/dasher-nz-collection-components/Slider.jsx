'use client'

import React, { useEffect, useState } from 'react'
import { dasherNzCollectionImage} from '../data/Alldata'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation } from 'swiper/modules'
// import 'swiper/css/navigation'
import 'swiper/css'

const Slider = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <>
            <section className="w-full pt-20">
                <h3 className="uppercase underline font-medium tracking-wider text-center text-[#212121]">
                    new arrivals
                </h3>

                <Swiper
                    // modules={[Navigation]}
                    breakpoints={{
                        320: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                    }}
                    // navigation
                    className="w-full lg:h-full h-1/2 "
                >
                    {dasherNzCollectionImage.map((img, index) => (
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
            </section>
        </>
    )
}

export default Slider
