'use client'
import { products } from '@/app/data/Alldata'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
    const { id } = params
    const product = products.find(product => product.id.toString() === id)
    const productImg=product.colors?.[0].images?.[0].otherimage
    return (
        <>
            <section className=' bg-[#ECE9E2] h-[160vh] pb-10 px-4 relative'>
                <div className='h-full relative'>
                    <img className='h-187.5 object-cover absolute -top-13' src={product.colors[0].images[0].mainimg} alt={product.title} />
                    <div className='flex absolute top-110'>
                        <img className='h-100 object-cover' src={product.colors?.[0]?.images?.[0]?.otherimage?.backface} alt="" />
                        <img className='h-100 object-cover' src={product.colors?.[0]?.images?.[0]?.otherimage?.upface} alt="" />
                    </div>
                    <div className='flex absolute bottom-0'>
                        <img className='h-100 object-cover' src={product.colors?.[0]?.images?.[0]?.otherimage?.sollface} alt="" />
                        <img className='object-cover h-100' src={product.colors?.[0]?.images?.[0]?.otherimage?.pair} alt="" />
                    </div>
                </div>
                {/* ***********************second white box*************************** */}
                <div className='absolute bg-white top-25 right-5 w-[37%] p-8 rounded-xl space-y-6'>
                    <div>
                        <p>{product.title}</p>
                        <p>Also available in: Women's Sizes</p>
                        <span>{product.price}</span>
                    </div>
                    <div>
                        <Link href='/'>ALL</Link>
                        <Link href='/'>LIMITED</Link>
                    </div>
                    <span>{product.colors[0].name}</span>
                    <div className='grid grid-cols-5 gap-1'>
                        {product.colors.map((img, index) => (
                            <Link href='/' key={index} className='bg-[#F9F8F6] flex items-center justify-center'>
                                <img className='h-15 object-contain' src={img.images[0].mainimg} alt="mainimg" />
                            </Link>
                        ))}
                    </div>
                    <div >
                        <div className='uppercase'>
                            <Link href='/'>Men's Sizes</Link>
                            <Link href='/'>Women's Sizes</Link>
                        </div>
                        <div className='grid grid-cols-7 gap-2'>
                            {product.sizes.map((size, index) => (
                                <Link href='/' key={index} className='border border-[#E0DACF] flex items-center justify-center text-sm p-2 tracking-tighter cursor-pointer'>{size}</Link>
                            ))}
                        </div>
                        <div>
                            <p>The Dasher NZ fits true-to-size for most customers.</p>
                            <Link href='/'>Fit Guide</Link>
                        </div>
                    </div>
                    <Link href='/' className='inline-block bg-red-200 cursor-not-allowed w-full py-4 rounded-full text-sm text-center'>SELECT A SIZE</Link>
                    <div>
                        <span>Free Shipping on Orders over $75</span>
                        <span>Easy Returns</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
