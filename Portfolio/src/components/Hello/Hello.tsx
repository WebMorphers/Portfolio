 import Links from "../Links/Links"
import "./hello.css"


const Hello = () => {
  return (
    <div className='bg-gradient-to-b from-[#FAF2D3] to-[#F4E869] min-h-screen flex justify-center pt-20'>
      <div className='text-center mx-auto xs:pt-8 sm:pt-20 lg:pt-30'>
        <p className='font-bold mb-4 xs:text-[20px] sm:text-3xl lg:text-7xl md:text-5xl'> 
        <p className='mb-1' >Hello We Are</p>
          <br />
          <span className=" xs:text-[72%] sm:text-[70%]  md:text-5xl xl:text-8xl   font-serif uppercase " id="span">
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