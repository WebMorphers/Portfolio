 import Links from "../Links/Links"
import "./hello.css"


const Hello = () => {
  return (
    <div className='bg-gradient-to-b px-6 lg:px-28  from-[#FAF2D3] to-[#F4E869] min-h-screen flex justify-center pt-20'>
      <div className='text-center mx-auto pt-9 sm:pt-20 lg:pt-30'>
        <p className='font-bold mb-4 text-3xl lg:text-7xl '> 
        <p className='mb-1  ' >Hello We Are</p>
          <br />
          <span className=" font-serif uppercase tracking-[5px] md:tracking-[10px] lg:tracking-[15px]" id="span">
            WebMorphers
          </span><br />
          <p className='mt-8' >  A Team Of Web Developers</p>
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