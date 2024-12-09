import React from 'react'

 
export default function Homepage() {
  return (
        <div className="relative h-screen bg-cover bg-center " id='Home' style={{backgroundImage: "url('/Images/boxing.jpg')", backgroundPosition: '20% 20%'}}>
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-start justify-center pl-10">
                <h1 className="text-8xl font-bold text-white">
                    FIGHT LIKE <br />A <span className="text-red-500"> CHAMPION</span>
                </h1>
            </div>
            <div className="h-screen flex items-end justify-end">
            <div className="w-full h-48 bg-[#f5f5f5] clip-custom" style={{clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)",
        }}></div>
            </div>
        </div>
        


  )
}
