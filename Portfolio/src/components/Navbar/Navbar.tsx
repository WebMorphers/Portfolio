import './Navbar.css'
import logo from '../../assets/nobg_logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <a href="/">
        <img className='logo' src={logo} alt="" />
        </a>
      </div>
      <div className='links'> 
        <a  className='navlinkitem' href='#about_us' > ABOUT US</a>
        <a className='navlinkitem' href='#projects'> OUR PROJECTS</a> 
      </div>
      <div>
        <a className='contact' href='#contact'> CONTACT US</a> 
      </div>
      </div>
  )
}

export default Navbar