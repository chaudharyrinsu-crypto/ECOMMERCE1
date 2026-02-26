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
    const icons=[<FiInstagram />,<FaPinterest />,<FaFacebookF />,<BsTwitterX />,<FaTiktok />,<BsYoutube />]
  return (
    <>
       <div className='space-y-5 py-10 md:py-5'>
            <p className='text-[12px] uppercase md:text-start text-center'>Follow The Flock</p>
            <ul className='flex gap-5 text-2xl md:justify-start justify-center'>
                {icons.map((icon,index)=>(
                    <li key={index} className='h-10 w-10 border rounded-full  flex items-center justify-center'>
                    <Link href={'/'}>{icon}</Link>
                </li>
                ))}
            </ul>
          </div>
          <div className='pt-12 pb-5 flex items-center md:justify-start justify-center gap-5'>
            <Image className='md:block hidden' src='https://www.allbirds.com/cdn/shop/files/b-corp.svg?v=1751415254&width=80' alt='logo' height={50} width={50}/>
            <span className='flex gap-3 items-center text-[18px] px-5'>US <span className='text-[12px]'><IoIosArrowDown /></span></span>
          </div>
          <div className='border-t border-white/30 w-full py-5'>
            <ul className='grid md:grid-cols-6 grid-cols-2  md:justify-center justify-start'>
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
