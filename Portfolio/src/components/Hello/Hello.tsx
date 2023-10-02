import React from 'react';
import Links from "../Links/Links"
import "./hello.css"


const Hello = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFD166] to-[#FFFCF9] to-100%  min-h-screen flex justify-center pt-20'>
      <div className='text-center mx-auto xs:pt-10 sm:pt-24 lg:pt-32'>
        <p className='font-bold mb-4 xs:text-2xl sm:text-3xl lg:text-7xl md:text-5xl'> 
          Hello We Are<br />
          <span className=" xs:text-3xl sm:text-4xl md:text-7xl xl:text-8xl text-yellow-500 font-serif uppercase ">
            WebMorphers
          </span><br />
          A Team Of Web Developers
        </p>
        <Links/>
        <span className="scroll-icon ">
            <span className="scroll-icon__dot"></span>
          </span>
      </div> 
    </div>
  );
}

export default Hello;