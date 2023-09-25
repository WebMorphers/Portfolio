import "./about.css"
import logo from '../../assets/nobg_logo.png'

const About = () => {
  return (
    <div className="containerr">
      <div className="h1p"><h1>About Web Morphers</h1>
      <br />
      <div>
  <p className="pp">
    <span className="highlight">Web Morphers</span>, a budding team of <span className="highlight">ReactJS experts</span>, is redefining web development. Despite our newcomer status, we're driven by <span className="highlight">passion</span> and <span className="highlight">determination</span>. Our mission: to create captivating, interactive web experiences that shape the digital landscape.
  </p>
  <br />
  <p>
    We embrace <span className="highlight">innovation</span>, constantly evolving to stay at the forefront of <span className="highlight">technology trends</span>. Our <span className="highlight">agility</span> and <span className="highlight">adaptability</span> enable us to exceed expectations and turn ambitious concepts into reality. Join us on this dynamic journey, as we reshape the future of the web.
  </p>
</div>

      </div>
 
     
    <div className="img"><img src={logo} alt="" /></div>
    
    </div>
  )
}

export default About