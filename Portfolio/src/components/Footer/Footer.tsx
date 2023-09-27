import './footer.css'

const Footer = () => {
  return (
      <div className='containerrr'>
        <div className='linkat'>
          <a href="">
            <i className="fa-brands fa-linkedin-in" style={{color:"#ffffff", width:"17px", height:"17px"}}></i>
          </a>
          <a href="">
          <i className="fa-brands fa-x-twitter" style={{color:"#ffffff", width:"17px", height:"17px"}}></i>

          </a>

        </div>
        <div className='copyright'>
          &copy; Copyright 2023
        </div>
        <div className='adress'>
          <i className="fa-regular fa-envelope" style={{color:"#ffffff", width:"17px", height:"17px"}}></i>
          webmorphers@gmail.com
        </div>

      </div>
  )
}

export default Footer