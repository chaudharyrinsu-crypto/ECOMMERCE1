'use client'
import React from 'react'
import { allCollection, customerFavorites, menShoes, topAddOns } from '../data/Alldata'
import Link from 'next/link'

const CategoryCollection = () => {
  return (
    <>
      <section className='absolute top-0 left-0 z-50 bg-[#ECE9E2] w-full py-20'>
        <div className='max-w-330 m-auto'>
            <div className='bg-[#E0DACF] py-3 rounded-xl  space-x-6 text-[14px] font-medium text-center'>
                                <Link href='/'>Shoes</Link>
                                <Link href='/'>Socks & Apparel</Link>
                                <Link href='/'>Sale</Link>
                            </div>
            <div className='grid grid-cols-4 text-[14px]'>
            <div className='py-2 uppercase'>
                {/* {allCollection.map(a=>(
                    <Link className='uppercase flex mt-6 font-medium hover:underline' key={a} href='/'>{a}</Link>
                ))} */}
                <Link className=' flex mt-6 font-medium hover:underline'  href='/pages/dasher-nz-collection'>Dasher NZ Collection</Link>
                <Link className=' flex mt-6 font-medium hover:underline'  href='/'>Terralux™ Collection</Link>
                <Link className=' flex mt-6 font-medium hover:underline'  href='/'>Varsity Collection</Link>
                <Link className=' flex mt-6 font-medium hover:underline'  href='/'>New Arrivals</Link>
                <Link className=' flex mt-6 font-medium hover:underline'  href='/'>Bestsellers</Link>

            </div>
            <div className='py-2'>
                <Link href='/' className='mt-6 inline-block font-medium uppercase hover:underline'>Men's Shoes</Link>
                {menShoes.map(a=>(
                    <Link className='text-[#575757] flex mt-3 hover:underline' key={a} href='/'>{a}</Link>
                ))}
            </div>
            <div className='py-2'>
                 <h5 className='mt-6 uppercase font-medium'>Customer Favorites</h5>
                {customerFavorites.map(a=>(
                    <Link className='text-[#575757] flex mt-3 hover:underline' key={a} href='/'>{a}</Link>
                ))}
            </div>
            <div className='py-2'>
                <h5 className='mt-6 uppercase font-medium'>Top Add-Ons</h5>
                {topAddOns.map(a=>(
                    <Link className='text-[#575757] flex mt-3 hover:underline' key={a} href='/'>{a}</Link>
                ))}
            </div>
           
            </div>
        </div>
      </section>
    </>
  )
}

export default CategoryCollection
