import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


function Footer() {
  return (
    <div className='py-24 px-20 bg-[black]' id='Contact'>
        <div className='mx-auto flex justify-between text-center'>
            <p className='font-bold text-white text-center'>READY FOR YOUR <span className='text-red-600'>NEXT</span> LESSON ?</p>
        <div className='flex gap-3 text-center'>
            <FaFacebookSquare className='size-10 text-white'/>
            <FaInstagram className='size-10 text-white'/>
            <MdEmail className='size-10 text-white' />
        </div>
        </div>

        <div className='mx-auto flex justify-between text-center mt-14'>
            <div className='flex gap-2 justify-center items-center'>
            <MdEmail className='size-10 text-white' />
            <p className=' text-white text-center'>INFO@GMAIL.COM</p>
            </div>
        <div className='flex gap-4 text-center'>
            <a href="#" class="cursor-pointer hover:underline text-white">PRIVACY POLICY</a>
            <a href="#" class="cursor-pointer hover:underline text-white">TERM & CONDITIONS</a>
        </div>
        </div>
    </div>
  )
}

export default Footer
