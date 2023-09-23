import './Navbar.css'
import { Link } from 'react-scroll';
import img from '../../assets/1427745.png'


const Navbar = () => {
  return (

    <div className='container'>

      <img className='logo' src={img} alt="" />
      <div className='links'> 
        <Link href="/"  className='navlinkitem' to=''> About Us</Link>
        <Link href="/" className='navlinkitem'  to=''> OUR PROJECTS</Link> 
      </div>
      <button className="contactButton"> Contact
  <div className="iconButton">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </div>
</button>    </div>
  )
}

export default Navbar