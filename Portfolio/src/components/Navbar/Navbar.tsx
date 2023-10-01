import "./Navbar.css";
import logo from "../../assets/nobg_logo.png";
import  { useEffect ,useState } from 'react'; 
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {
  const [nav,setnav]=useState(false); 
  function chang(){
    setnav(!nav);
  }
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
     const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.slice(1); // Use optional chaining
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });
  }, []);

  return (
    <div className='z-10 sticky top-0 flex justify-between items-center h-24 max-w-full mx-auto px-10 text-white bg-transparent	backdrop-blur-md'>
       <img className=" h-20 w-23" src={logo} alt="" />
      <ul className='hidden md:flex'>
        <li className='p-4'><a
          className="no-underline mx-4 cursor-pointer font-thin text-gray-900 hover:text-orange-600"
          onClick={() => scrollToSection("about_us")}
          href="#about_us"
        >
          ABOUT US
        </a></li>
        <li className='p-4'><a
          className="no-underline mx-4 cursor-pointer font-thin text-gray-900 hover:text-orange-600"
          onClick={() => scrollToSection("projects")}
          href="#projects"
        >
          OUR PROJECTS
        </a></li>

         
      </ul>
      <ul className='hidden md:flex'>
      <li className='p-4'> <a
          className="no-underline mx-4 cursor-pointer font-thin text-gray-900 hover:text-orange-600"
          onClick={() => scrollToSection("contact")}
          href="#contact"
        >
          CONTACT US
        </a></li>
      </ul>
      <div onClick={chang} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? ' fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#a08f30] ease-in-out duration-500  ' : '  ease-in-out duration-500 fixed left-[-100%] '}>
      <img className=" h-20 w-23" src={logo} alt="" />
        <li className='p-4'><a
          className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600"
          onClick={() => scrollToSection("about_us")}
          href="#about_us"
        >
          ABOUT US
        </a></li>
        <li className='p-4'><a
          className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600"
          onClick={() => scrollToSection("projects")}
          href="#projects"
        >
          OUR PROJECTS
        </a></li>
        <li className='p-4'> <a
          className="no-underline mx-4 cursor-pointer font-thin text-white hover:text-orange-600"
          onClick={() => scrollToSection("contact")}
          href="#contact"
        >
          CONTACT US
        </a></li>
      </ul>
    </div>
  );
};

export default Navbar;
