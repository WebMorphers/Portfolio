import './Navbar.css'
import logo from '../../assets/nobg_logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>

      <img className='logo' src={logo} alt="" />
      <div className='links'> 
        <a  className='navlinkitem' > ABOUT US</a>
        <a className='navlinkitem' > OUR PROJECTS</a> 
      </div>
      <a className='contact'> CONTACT US</a> 

      </div>
  )
}

export default Navbar