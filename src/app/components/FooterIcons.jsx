import Link from 'next/link';
import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

const FooterIcons = () => {
  return (
    <>
       <div className='space-y-5 py-5'>
            <p className='text-[12px] uppercase'>Follow The Flock</p>
            <ul className='flex gap-5 text-2xl'>
                <li className='h-10 w-10 border rounded-full p-2'>
                    <Link href={'/'}><FiInstagram /></Link>
                </li>
                <li className='h-10 w-10 border rounded-full p-2'>
                    <Link href={'/'}><FaPinterest /></Link>
                </li>
                <li className='h-10 w-10 border rounded-full p-2'>
                    <Link href={'/'}><FaFacebookF /></Link>
                </li>
                <li className='h-10 w-10 border rounded-full p-2'>
                    <Link href={'/'}><BsTwitterX /></Link>
                </li>
                <li className='h-10 w-10 border rounded-full p-2'>
                    <Link href={'/'}><FaTiktok /></Link>
                </li>
                <li className='h-10 w-10 border rounded-full p-2'>
                    <Link href={'/'}><BsYoutube /></Link>
                </li>
            </ul>
          </div>
          <div className='py-12 flex items-center gap-5'>
            <Image src='https://www.allbirds.com/cdn/shop/files/b-corp.svg?v=1751415254&width=80' alt='logo' height={50} width={50}/>
            <span className='flex gap-3 items-center text-[18px] px-5'>US <span className='text-[12px]'><IoIosArrowDown /></span></span>
          </div>
          <div className='border-t border-white/30 w-full py-5'>
            <ul className='flex justify-between'>
                <li>© 2025 Allbirds, Inc. All Rights Reserved</li>
                <li>Refund policy</li>
                <li>Privacy policy</li>
                <li>Terms of service</li>
                <li>Do Not Sell My Personal Information</li>
                <li>California Transparency Act</li>
            </ul>
          </div>
    </>
  )
}

export default FooterIcons
