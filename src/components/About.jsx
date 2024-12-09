import React from 'react'
import { IoIosFitness } from "react-icons/io";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrRun } from "react-icons/gr";




export default function About() {
  return (
    <div className=' mx-auto py-20 px-4 bg-[#f5f5f5]' id='About'>
      <div>
        <div className='flex gap-20 justify-center items-center mb-5 mt-5'>
        <GrRun className='size-20'/>
        <IoIosFitness  className='size-20' />
        <GiWeightLiftingUp  className='size-20' />
        </div>
        <div className='flex gap-20 justify-center items-center mb-20'>
          <h1 className='text-2xl font-bold text-red-500'>exercise</h1>
          <h1 className='text-2xl font-bold text-red-500'>crossfit</h1>
          <h1 className='text-2xl font-bold text-red-500'>weight</h1>
        </div>
      </div>
      
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-center justify-center'>
                <img className='rounded-lg shadow-md w-200 h-auto' src="/Images/77.jpg" alt="About Us" />
            </div>

            <div className='flex flex-row justify-start '>
                <div className=' flex w-6 h-24  bg-[red] mr-4'></div>
                
                <div>
                <h3 className='text-2xl font-bold mb-4'>how we got started in this business</h3>
                <p className='text-gray-700 mb-4' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada</p>
                <p className='text-gray-700 mb-4'> Ut aliquam augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo.</p>
                <button className='py-2 px-6 mr-4 border bg-red-600 text-white '> SIGN UP</button>
                </div>
            </div>
            
        </div>
      </div>
  )
}
