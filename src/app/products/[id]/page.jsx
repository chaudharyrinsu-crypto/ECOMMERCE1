'use client'
import { products } from '@/app/data/Alldata'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const params = useParams()
    const { id } = params
    const product = products.find(product => product.id.toString() === id)
    const [selectedItem, setSelectedItem] = useState(product.items[0])
    const [hexName, setHexName] = useState(product.items[0])

    return (
        <>
            <section className=' bg-[#ECE9E2] h-[160vh] py-10 px-4 relative'>
                <div className='h-full relative'>
                    <img className='h-187.5 object-cover absolute -top-25' src={selectedItem.firstimg} alt={product.title} />
                    <div className='flex absolute top-100'>
                        <img className='h-95 object-cover' src={selectedItem.secondimg} />
                        <img className='h-95 object-cover' src={selectedItem.thirdimg} />
                    </div>
                    <div className='flex absolute -bottom-15'>
                        <img className='object-cover h-95' src={selectedItem.fourthimg} />
                        <img className='h-95 object-cover' src={selectedItem.fifthimg} />
                    </div>
                </div>
                {/* ***********************second white box*************************** */}
                <div className='absolute bg-white top-25 right-5 w-[40%] p-8 rounded-xl'>
                    <div>
                        <p className='text-3xl'>{product.title}</p>
                        <p className='text-[#575757] py-1'>Also available in: Women's Sizes</p>
                        <span className='inline-block font-semibold py-1'>{product.price}</span>
                    </div>
                    <div className='space-x-4 space-y-2 pt-5'>
                        <Link className='underline inline-block' href='/'>ALL</Link>
                        <Link className='inline-block' href='/'>LIMITED</Link>
                    </div>
                    <span className='text-[#575757]'>{hexName.name}</span>
                    <div className='grid grid-cols-5 gap-1 py-1'>
                        {product.items.map((img, index) => (
                            <button key={index} onClick={() => setSelectedItem(img)} onMouseEnter={() => setHexName(img)} className={`bg-[#F9F8F6] flex items-center justify-center ${selectedItem === img ? 'border-2 border-[#121212]' : 'border-none'} `}>
                                <img className='h-15 object-contain cursor-pointer w-full' src={img.firstimg} alt="firstimg" />
                            </button>
                        ))}
                    </div>
                    <div >
                        <div className='uppercase pt-5'>
                            <Link href='/'>Men's Sizes</Link>
                            <Link href='/'>Women's Sizes</Link>
                        </div>
                        <div className='grid grid-cols-7 gap-2 py-4'>
                            {product.sizes.map((size, index) => (
                                <Link href='/' key={index} className='border border-[#E0DACF] flex items-center justify-center text-sm p-3 tracking-tighter cursor-pointer'>{size}</Link>
                            ))}
                        </div>
                        <div className='text-[#575757] pb-6 text-sm'>
                            <p>The Dasher NZ fits true-to-size for most customers.</p>
                            <Link className='underline' href='/'>Fit Guide</Link>
                        </div>
                    </div>
                    <div className='pb-12'>
                        <Link href='/' className='inline-block bg-[red-200] cursor-not-allowed w-full py-4 rounded-full text-sm text-center'>SELECT A SIZE</Link>
                    </div>
                    <div className='text-[#575757] text-sm text-center'>
                        <span className='block'>Free Shipping on Orders over $75</span>
                        <span>Easy Returns</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
