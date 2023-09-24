import './hello.css'
import image from '../../assets/nobg_logo.png'

const Hello = () => {
  return (
    <div className='container'>
      <div className='text'>
        <h1 className='title'>Who we Are ?</h1>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rerum minima laboriosam beatae cumque. Asperiores eius at necessitatibus, accusantium ducimus eum provident tempora accusamus cumque iusto eaque, reprehenderit illum consequuntur.
        </p>
      </div>
      <div className='imageContainer'>
        <img className='image' src={image} alt="" />

      </div>
    </div>
  )
}

export default Hello