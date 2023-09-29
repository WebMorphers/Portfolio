import './footer.css'

const Footer = () => {
  const email = "WebMorphers@gmail.com";
  return (
      <div className='containerrr'>
        <div className='linkat'>
          <a target="_blank" href="https://www.linkedin.com/company/webmorphers/about/">
            <i  className="fa-brands fa-linkedin-in" style={{color:"#ffffff", width:"17px", height:"17px"}}></i>
          </a>
          <a target="_blank" href="https://twitter.com/WebMorphers">
          <i className="fa-brands fa-x-twitter" style={{color:"#ffffff", width:"17px", height:"17px"}}></i>
          </a>

        </div>
        <div className='copyright'>
          &copy; Copyright 2023
        </div>
        <div className='adress'>
          <i className="fa-regular fa-envelope" style={{color:"#ffffff", width:"17px", height:"17px"}}></i>
           <a className='maill' href={`mailto:${email}`}>webmorphers@gmail.com</a>
        </div> 
      </div>
  )
}

export default Footer