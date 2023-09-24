import './hello.css'
import image from '../../assets/nobg_logo.png'

const Hello = () => {
  return (
    
    <div className='container'>
      
      <div className='text'> 
        <p className='description'>
        Hello We Are<br />  <span className="span" >WebMorphers</span><br /> A Team Of Web Developers   
        </p>
      </div>
      {/* <div className='imageContainer'>
        <img className='image' src={image} alt="" />

      </div> */}
      
    </div>
  )
}

export default Hello