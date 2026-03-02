'use client'
import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { products } from '../data/Alldata'
import { BsMinecart } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import { RxCross1 } from "react-icons/rx";


const MensNewarrivalCardResponsive = () => {
    const { state, dispatch } = useContext(CartContext)
    const [activeOverlay, setActiveOverlay] = useState(null)
    return (
        <>
            <div className="w-full lg:hidden block px-3 tracking-wider ">

                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        }
                    }}
                    spaceBetween={10}
                    // navigation
                    className="w-full pb-10"
                >
                    {products.filter(i => i.gender == 'women').slice(1, 5).map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full relative bg-white rounded-2xl relative">
                                {/* box overlay */}
                                <div className={`absolute h-full w-full  rounded-2xl z-40  duration-500 ${activeOverlay === index ? 'bottom-0 translate-y-0 block bg-black opacity-40' : ' hidden pointer-events-none'}`}></div>
                                <img
                                    src={item.items[0].firstimg}
                                    alt="new arrivals shoes"
                                    className="w-full h-full md:object-cover object-contain"
                                />
                                <div className='w-full px-3 pb-3 space-y-1'>
                                    <div className='flex items-center justify-between  w-full'>
                                        <h3 className='font-semibold text-sm uppercase'>{item.title}</h3>
                                        <span className='block text-sm font-semibold'>{item.price}</span>
                                    </div>
                                    <span className='text-[12px] font-normal block'>{item.items[0].name}</span>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-1 xl:gap-2 items-center'>
                                            {item.items.slice(0, 5).map((color, index) => (
                                                <span key={index}
                                                    style={{ backgroundColor: color.hex }}
                                                    className='h-4 w-4 rounded-full inline-block border'
                                                ></span>
                                            ))}
                                            {item.items.length > 5 && (
                                                <span className='underline md:text-sm text-[12px]'>+{item.items.length - 5}</span>
                                            )}
                                        </div>
                                        <button onClick={() => setActiveOverlay(index)} className='cursor-pointer uppercase flex gap-2.5 border py-2.5 px-4 rounded-4xl text-sm hover:bg-[#212121] hover:text-white duration-200'><BsMinecart /> <span className='text-[12px] block font-medium'>ADD</span></button>
                                    </div>
                                </div>
                                <div className={`absolute w-full p-3 z-50 bg-[#F8F8F7] rounded-2xl transition-all duration-500
                                  ${activeOverlay === index ? 'bottom-0 translate-y-0 opacity-100 ' : '-bottom-full opacity-0 pointer-events-none'}`}>
                                    <div className='flex justify-between text-sm pb-2'>
                                        <p>Select a size</p>
                                        <span onClick={() => setActiveOverlay(null)} className={`cursor-pointer`}><RxCross1 /></span>
                                    </div>
                                    <div className='grid grid-cols-7 gap-2 '>
                                        {item.sizes.map((size, index) => (
                                            <button key={index}
                                                onClick={() => {
                                                    dispatch({
                                                        type: "ADD_TO_CART",
                                                        payload: {
                                                            id: item.id,
                                                            title: item.title,
                                                            price: item.price,
                                                            size: size,
                                                            image: item.items[0].fifthimg
                                                        }
                                                    })

                                                    dispatch({ type: "OPEN_CART" })
                                                    setActiveOverlay(null)
                                                }}
                                                className='flex items-center justify-center text-[12px] p-2 tracking-tighter cursor-pointer hover:bg-[#121212] hover:text-white border-[#E0DACF] border'
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default MensNewarrivalCardResponsive
