import React from 'react';

const Hello = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex justify-center   pt-20 '>
      <div className='text-center'>
        <p className='sm:text-[25px] md:text-[60px] lg:text-[60px]  font-bold mb-4'> 
          Hello We Are<br />
          <span className="text-yellow-500 font-serif sm:text-[32px] md:text-[70px] lg:text-[130px] uppercase animate-pulse mt-5">
            WebMorphers
          </span><br />
          A Team Of Web Developers
        </p>
      </div>
    </div>
  );
}

export default Hello;