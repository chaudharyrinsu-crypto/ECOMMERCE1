'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import FooterIcons from './FooterIcons'
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const Footer = () => {
  const [hideList1, SetHideList1] = useState(true)
  const [hideList2, SetHideList2] = useState(true)
  const [hideList3, SetHideList3] = useState(true)
  return (
    <>
      <footer className='bg-[#212121] text-white px-10 pt-20 tracking-wider font-normal text-[12px]'>
        <section className='flex justify-between '>
          <div className='max-w-[600px] flex flex-col gap-8'>
            <p className='font-medium uppercase'>Subscribe to our emails</p>
            <div className='relative w-full '>
              <input className='bg-white text-black py-2 px-3 text-[18px] rounded-full w-full' type="email" name="email" id="email" placeholder='Email Address' />
              <button className='absolute right-3 text-[#212121] top-1/2 -translate-y-1/2'>SIGN UP</button>
            </div>
          </div>
          <div className='flex justify-between gap-20'>
            <div className='flex justify-between gap-8'>
              <div className={`flex flex-col gap-8 border-b border-white/30 md:border-b-none`}>
                <div className='flex justify-between'>
                  <p className='uppercase'>Help</p>
                  <div onClick={() => SetHideList1(!hideList1)} className='text-[18px] md:hidden block'>{hideList1 ? <LuPlus /> : <LuMinus />}</div>
                </div>
                <ul className={`space-y-5 ${hideList1 ? 'hidden' : 'block'} md:block`}>
                  <li><Link href={'/'}>Live Chat</Link></li>
                  <li><Link href={'/'}>Call Us</Link></li>
                  <li><Link href={'/'}>Text Us</Link></li>
                  <li><Link href={'/'}>help@allbirds.com</Link></li>
                  <li><Link href={'/'}>FAQ/Contact Us</Link></li>
                  <li><Link href={'/'}>Returns/Exchanges</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-8 border-b border-white/30 md:border-b-none'>
                <div className='flex justify-between'>
                  <p className='uppercase'>Shop</p>
                  <div onClick={() => SetHideList2(!hideList2)} className='text-[18px] md:hidden block'>{hideList2 ? <LuPlus /> : <LuMinus />}</div>
                </div>
                <ul className={`space-y-5 ${hideList2 ? 'hidden' : 'block'} md:block `}>
                  <li><Link href={'/'}>Men's Shoes</Link> </li>
                  <li><Link href={'/'}>Women's Shoes</Link> </li>
                  <li><Link href={'/'}>Men's Apparel</Link> </li>
                  <li><Link href={'/'}>Women's Apparel</Link> </li>
                  <li><Link href={'/'}>Socks</Link> </li>
                  <li><Link href={'/'}>Gift Cards</Link> </li>
                  <li><Link href={'/'}>Refer a Friend</Link> </li>
                </ul>
              </div>
              <div className='flex flex-col gap-8 border-b border-white/30 md:border-b-none'>
                <div className='flex justify-between'>
                  <p className='uppercase'>Company</p>
                  <div onClick={() => SetHideList3(!hideList3)} className='text-[18px] md:hidden block'>{hideList3 ? <LuPlus /> : <LuMinus />}</div>
                </div>
                <ul className={`space-y-5 ${hideList3 ? 'hidden' : 'block'} md:block`}>
                  <li><Link href={'/'}>Our Stores</Link> </li>
                  <li><Link href={'/'}>Our Story</Link> </li>
                  <li><Link href={'/'}>Our Materials</Link> </li>
                  <li><Link href={'/'}>Sustainability</Link> </li>
                  <li><Link href={'/'}>Investors</Link> </li>
                  <li><Link href={'/'}>Shoe Care</Link> </li>
                  <li><Link href={'/'}>Affiliates</Link> </li>
                  <li><Link href={'/'}>Bulk Orders</Link> </li>
                </ul>
              </div>
            </div>
            <div className='py-5'>
              <ul className='space-y-5 pt-10'>
                <li><Link href={'/'}>Careers</Link> </li>
                <li><Link href={'/'}>Press</Link> </li>
                <li><Link href={'/'}>Allbirds Responsible <span className='block'>Disclosure Program</span></Link> </li>
                <li><Link href={'/'}>California Transparency Act</Link> </li>
                <li><Link href={'/'}>Community Offers</Link> </li>
                <li><Link href={'/'}>Our Blog</Link> </li>
                <li><Link href={'/'}>Patents</Link> </li>
                <li><Link href={'/'}>Terms of Use - Wholesale</Link> </li>
                <li><Link href={'/'}>Allbirds Global Entities</Link> </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <FooterIcons />
        </section>
      </footer>
    </>
  )
}

export default Footer
