import React from 'react'
import { useEffect,useState } from "react";


const ToTopButton = () => {
    const [BackToTopButton,setBackToTopButton]=useState(false)
  
  useEffect(() =>{
    window.addEventListener("scroll", ()=> {
      window.scrollY > 100? setBackToTopButton(true):setBackToTopButton(false)
    })
  },[])
  const scrollUp=()=>{
    window.scrollTo(
      {top:0,
        behavior: "smooth"
      }
    )
  }

  return (
    <div className="hidden md:block lg:block">{BackToTopButton && (
        <button onClick={scrollUp} className="fixed flex justify-center rounded-[50%] bg-inherited border-2 border-[black] bottom-20 right-10 w-10 h-10 items-center cursor-pointer transition-transform transform hover:scale-125 group ">
          <svg height="1.2em" className="text-white" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
        </button>
      )}</div>
  )
}

export default ToTopButton