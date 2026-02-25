'use client'
import Link from 'next/link'
import React from 'react'

const BigImg = () => {
    return (
        <>
            <section className='px-8 pb-30'>
                <div className='relative text-white'>
                    <img className='rounded-3xl object-cover w-full' src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Moonshot_BrandMessage_Lifestyle_Desktop_16x9_withVeil_4e2589c0-b881-4155-a7c9-b1617e4b9333.jpg?v=1758318144&width=1920" alt="bigimg" />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white p-5 rounded-full'>
                        <div className='border border-white p-5 rounded-full'>
                            <div className='text-center space-y-4 border border-white p-25 rounded-full'>
                                <h5 className='text-2xl'>Better Things in a Better Way</h5>
                                <p className='text-sm'>Looking to the world's greatest innovator - Nature</p>
                                <Link className='bg-white text-[12px] tracking-wide text-[#212121] px-4 py-1.5 rounded-2xl uppercase inline-block duration-200 hover:bg-[#212121] hover:text-white' href='/'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <p className='absolute top-20 right-55 tracking-wide border rounded-4xl px-3 py-1
                    uppercase text-[12px]'>Responsible Energy</p>
                    <p className='absolute top-57 left-35 tracking-wide border rounded-4xl px-3 py-1
                    uppercase text-[12px]'>Renewable Materials</p>
                    <p className='absolute bottom-20 right-45 tracking-wide border rounded-4xl px-3 py-1
                    uppercase text-[12px]'>Regenerative Agriculture</p>
                </div>
            </section>
        </>
    )
}

export default BigImg
