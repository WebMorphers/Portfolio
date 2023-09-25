import "./about.css"
import logo from '../../assets/nobg_logo.png'

const About = () => {
  return (
    <div className="container">
      <div><h1>About Web Morphers</h1>
        <p className="pp">We are Web Morphers, a passionate team of front-end developers specializing in ReactJS.
         We craft visually stunning and highly interactive web experiences,
          shaping the future of the web one project at a time. 
          Join us on our journey to transform the digital landscape.</p>
      </div>
 
     
    <div><img src={logo} alt="" /></div>
    
    </div>
  )
}

export default About