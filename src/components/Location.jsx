import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";



function Location() {
  return (
    <div className='mx-auto py-24 px-24 bg-[#f4f4f4]' id='Location'>
        <div className='flex flex-row justify-between text-start mt-8 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col space-y-8 ' >
        <div className='flex items-center'>
            <CiLocationOn className='size-12 mr-4' />
            <p className='text-xl font-bold'>Skarbosky Gym Bkk Jockygym 5 ถ. <br /> ประชาราษฎร์สาย1 แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800</p>
        </div>
        <div className='flex items-center mb-5'>
            <FaPhoneAlt className='size-12 mr-4'/>
            <p className='text-xl font-bold '>+99 566 8951</p>
        </div>
        </div>
        <div >
             <img className='w-[500px] h-96 shadow-sm rounded-lg' src="/Images/location.png" alt="location" id='location' />
        </div>
        </div>
    </div>

  )
}

export default Location
