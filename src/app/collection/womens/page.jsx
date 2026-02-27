'use client'
import React, { useContext } from 'react'
import Nav from '../col-components/Nav'
import { products } from '@/app/data/Alldata'
import Link from 'next/link'
import { BsMinecart } from "react-icons/bs";
import { CartContext } from '@/app/context/CartContext'

const page = () => {
       const{state,dispatch}=useContext(CartContext)
    return (
        <section className='p-3 bg-[#ECE9E2]'>
            <div className='pb-12 pt-25 space-y-3 text-cente tracking-wide text-center'>
                <h3 className='text-2xl'>Women's Shoes</h3>
                <p className='text-sm text-[#575757]'>Lightweight, supportive, and wildly comfortable, our premium men’s shoes make any outing feel effortless.</p>
            </div>
            <Nav />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-w-6xl mx-auto px-4 py-3.5 tracking-wider'>
                {products
                    .filter(i => i.gender === 'women' && i.badge === 'newarrivalshoe')
                    .map((item, index) => (
                        <div key={index} className='bg-white rounded-2xl relative hover:z-50 hover:scale-[1.055] hover:shadow-xl duration-200 group'>
                            <Link href={`/products/${item.id}`} className='block'>
                                <div className='bg-[#E0DACF] absolute top-4 left-4 px-2 py-1 rounded-2xl flex items-center justify-center text-[12px]'>NEW</div>
                                <img
                                    src={item.items[0].firstimg}
                                    alt={item.title}
                                    className='w-full object-contain h-full'
                                />
                                <div className='lg:p-4 p-2'>
                                    <Link href='/' className='font-semibold block md:text-sm text-[12px] uppercase'>{item.title}</Link>
                                    <Link href='/' className='text-sm block mt-0 lg:mt-1.5'>{item.items[0].name}</Link>
                                    <div className='relative flex gap-2 xl:flex-row flex-col justify-between mt-1.5'>
                                        <span className='block xl:hidden text-sm font-semibold'>{item.price}</span>
                                        <div className='flex gap-1 xl:gap-2'>
                                            {item.items.slice(0, 5).map((color, index) => (
                                                <Link href='/' key={index}
                                                    style={{ backgroundColor: color.hex }}
                                                    className='lg:h-6 h-5 w-5 lg:w-6  rounded-full inline-block border'
                                                ></Link>
                                            ))}
                                            {item.items.length > 5 && (
                                                <Link href='/' className='underline'>+{item.items.length - 5}</Link>
                                            )}
                                        </div>
                                        <div className=' lg:hidden flex justify-center gap-2 text-[12px] cursor-pointer border-t border-[#E0DACF] py-2 mt-1'>
                                            <span className='text-sm block'><BsMinecart /></span>
                                            <button onClick={(e)=>{
                                                e.preventDefault()
                                                e.stopPropagation()
                                                dispatch({type:'ADD_TO_CART',payload:{
                                                    id:item.id,
                                                    title:item.title,
                                                    price:item.price,
                                                    size:item.sizes[0],
                                                    image:item.items[0].firstimg
                                                }})
                                                dispatch({type:'OPEN_CART'})
                                            }} className='uppercase font-semibold block'>add to cart</button>
                                        </div>
                                        <span className='xl:block hidden text-sm font-semibold'>{item.price}</span>
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
    )
}

export default page