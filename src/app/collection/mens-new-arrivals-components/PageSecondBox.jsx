'use client'
import React, { useState } from 'react'
import Link from 'next/link'
const [selectSize, setSelectSize] = useState(null)

const PageSecondBox = ({ product,
    selectedItem,
    setSelectedItem,
    hexName,
    setHexName }) => {
    return (
        <>
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
                            <button key={index} onClick={() => setSelectSize(size)} className={` flex items-center justify-center text-sm p-3 tracking-tighter cursor-pointer ${selectSize === size ? 'bg-[#121212] border-none text-white' : 'border border-[#E0DACF]'}`}>{size}</button>
                        ))}
                    </div>
                    <div className='text-[#575757] pb-6 text-sm'>
                        <p>The Dasher NZ fits true-to-size for most customers.</p>
                        <Link className='underline' href='/'>Fit Guide</Link>
                    </div>
                </div>
                <div className='pb-12'>
                    <Link href='/' className={`inline-block w-full py-4 rounded-full text-sm text-center ${selectSize ? 'bg-[#121212] text-white cursor-auto' : 'cursor-not-allowed border border-[#D1D5DC] bg-[#E7E5EB]'}`}>{selectSize ? 'ADD TO CART -' : 'SELECT A SIZE'} {selectSize && product.price}</Link>
                </div>
                <div className='text-[#575757] text-sm text-center'>
                    <span className='block'>Free Shipping on Orders over $75</span>
                    <span>Easy Returns</span>
                </div>
            </div>
        </>
    )
}

export default PageSecondBox
