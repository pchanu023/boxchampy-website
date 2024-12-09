import React, { useState } from 'react'
import { FaBars , FaTimes } from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'; // นำเข้าไลบรารี


function Navbar() {
    const [isOpen,setIsOpen] =useState(false)
  return (
    <nav className='w-full  bg-black p-3 fixed top-0 left-0 right-0 z-50'>
        <div className='container px-4 flex justify-between items-center h-16'>
            <h3 className='flex justify-center items-center ml-4  text-xl font-bold text-white'><img className='w-[50px] h-[50px] mr-2' src="/Images/boxing.png" alt="" /> BOXCHAMPY</h3>
            <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
                <ul className=' flex justify-center'>
                    <li><AnchorLink className='text-white px-6 py-2 hover:bg-gray-600 hover:text-white' href="#Home">HOME</AnchorLink></li>
                    <li><AnchorLink className='text-white px-6 py-2 hover:bg-gray-600 hover:text-white' href="#About">ABOUT</AnchorLink></li>
                    <li><AnchorLink className='text-white px-6 py-2 hover:bg-gray-600 hover:text-white' href="#Location">LOCATION</AnchorLink></li>
                    <li><AnchorLink className=' text-white px-6 py-2 hover:bg-gray-600 hover:text-white' href="#Contact">CONTACT</AnchorLink></li>
                </ul>
            <div className='flex justify-end w-full'>
            <button className='py-2 px-8 border bg-red-600 hover:text-white'> SIGN UP</button>
            </div>
            </div>

            <div className='md:hidden'>
                <button className='text-white' size={20} onClick={()=>  setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden flex space-y-6 py-4 flex-col bg-black  items-center'>
                    <li className='list-none'><AnchorLink className='text-white px-10 py-2 hover:bg-gray-600 hover:text-white' href="#Home">HOME</AnchorLink></li>
                    <li className='list-none'><AnchorLink className='text-white px-10 py-2 hover:bg-gray-600 hover:text-white' href="#About">ABOUT</AnchorLink></li>
                    <li className='list-none'><AnchorLink className='text-white px-7 py-2 hover:bg-gray-600 hover:text-white' href="#Location">LOCATION</AnchorLink></li>
                    <li className='list-none'><AnchorLink className=' text-white px-7 py-2 hover:bg-gray-600 hover:text-white' href="#Contact">CONTACT</AnchorLink></li>
                <button className='py-2 px-10 border bg-red-600 hover:text-white'> SIGN UP</button>
            </div>
        )}
    </nav>
  )
}

export default Navbar
