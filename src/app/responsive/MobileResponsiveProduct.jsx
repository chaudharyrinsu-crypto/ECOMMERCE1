'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const MobileResponsiveProduct = ({ selectedItem, product }) => {
    const images = [
        selectedItem.firstimg,
        selectedItem.secondimg,
        selectedItem.thirdimg,
        selectedItem.fourthimg,
        selectedItem.fifthimg
    ];
    return (
        <>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="h-full overflow-hidden"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img
                            src={img}
                            alt={`${product.title} ${index + 1}`}
                            className="max-h-[250px] w-full object-contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default MobileResponsiveProduct
