import React from 'react';

const Hello = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFD166] to-[#FFFCF9] to-100%  min-h-screen flex justify-center pt-20'>
      <div className='text-center mx-auto sm:pt-24 lg:pt-32'>
        <p className='font-bold mb-4 sm:text-3xl lg:text-7xl md:text-5xl'> 
          Hello We Are<br />
          <span className=" sm:text-4xl md:text-7xl xl:text-8xl text-yellow-500 font-serif uppercase animate-pulse mt-5">
            WebMorphers
          </span><br />
          A Team Of Web Developers
        </p>
      </div>
    </div>
  );
}

export default Hello;