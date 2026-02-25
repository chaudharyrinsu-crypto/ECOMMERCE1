import Link from 'next/link';
import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
<BsYoutube />

const FooterIcons = () => {
  return (
    <>
       <div>
            <p>Follow The Flock</p>
            <ul>
                <li>
                    <Link href={'/'}><FiInstagram /></Link>
                </li>
                <li>
                    <Link href={'/'}><FaPinterest /></Link>
                </li>
                <li>
                    <Link href={'/'}><FaFacebookF /></Link>
                </li>
                <li>
                    <Link href={'/'}><BsTwitterX /></Link>
                </li>
                <li>
                    <Link href={'/'}><FaTiktok /></Link>
                </li>
                <li>
                    <Link href={'/'}></Link>
                </li>
            </ul>
          </div>
    </>
  )
}

export default FooterIcons
