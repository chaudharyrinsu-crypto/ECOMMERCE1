import React, { useContext } from 'react'
import { products } from '../data/Alldata'
import Link from 'next/link'
import { BsMinecart } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import MensNewarrivalCardResponsive from './MensNewarrivalCardResponsive';

const WomensNewarrivalCard = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <>
            <section className='pt-5 pb-2.5 lg:pb-5 lg:pt-10 px-3 tracking-wider'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2.5 '>
                    <div className='lg:grid grid-cols-2 gap-2.5  hidden'>
                        {products.filter(i => i.gender === 'men').slice(1, 5).map((item, index) => (
                            <div key={index} className='bg-white rounded-2xl relative min-h-[320px] bg-amber-300'>
                                <div className=''>
                                    <img className='object-cover absolute top-[-50px]' src={item.items[0].fifthimg} alt="firstimg" />
                                </div>
                                <div className='absolute bottom-0 left-0 w-full px-3 pb-3 space-y-2'>
                                    <div className='flex items-center justify-between  w-full'>
                                        <h3 className='font-medium md:text-sm text-[12px] uppercase'>{item.title}</h3>
                                        <span className='block text-sm font-semibold'>{item.price}</span>
                                    </div>
                                    <span className='text-sm block'>{item.items[0].name}</span>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-1 xl:gap-2 items-center'>
                                            {item.items.slice(0, 5).map((color, index) => (
                                                <span key={index}
                                                    style={{ backgroundColor: color.hex }}
                                                    className='lg:h-4 h-3 w-3 lg:w-4 rounded-full inline-block border'
                                                ></span>
                                            ))}
                                            {item.items.length > 5 && (
                                                <span className='underline text-sm'>+{item.items.length - 5}</span>
                                            )}
                                        </div>
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            dispatch({
                                                type: 'ADD_TO_CART', payload: {
                                                    id: item.id,
                                                    title: item.title,
                                                    price: item.price,
                                                    size: item.sizes[0],
                                                    image: item.items[0].firstimg
                                                }
                                            })
                                            dispatch({ type: 'OPEN_CART' })
                                        }} className='cursor-pointer uppercase flex gap-2.5 border py-2.5 px-4 rounded-4xl text-sm block hover:bg-[#212121] hover:text-white duration-200'><BsMinecart /> <span className='text-[12px] block font-medium'>ADD</span></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='relative'>
                        <img className='rounded-3xl' src="https://www.allbirds.com/cdn/shop/files/26Q1_Terralux_Site_ProductGrid_Desktop-Mobile_9x16_W_v2_7ab82be7-ee5a-4792-b146-2dbcc47edf6f.jpg?v=1771541948&width=1280" alt="menshoe" />
                        <div className='absolute top-10 lg:top-30 text-white text-center space-y-3 lg:space-y-4 left-1/2 -translate-x-1/2'>
                            <h3 className='lg:text-4xl text-2xl font-normal'>Men’s New Arrivals</h3>
                            <p className='text-[12px] lg:text-sm'>Warm, refined, and wildly comfortable.</p>
                        </div>
                        <Link href={`/collection/mens-new-arrivals`} className='cursor-pointer uppercase flex gap-2.5 py-2.5 px-4 rounded-4xl text-sm absolute z-40 right-3 bottom-3 bg-white hover:bg-[#212121] hover:text-white duration-200'><BsMinecart /> <span className='text-[12px] block font-medium'>SHOP NOW</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WomensNewarrivalCard
