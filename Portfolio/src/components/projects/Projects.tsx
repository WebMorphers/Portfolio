import './Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {
  return (
    <div  className='ontainer'>
      <h1 className="pconty">Projects</h1>
      <div className='content'>
      <p className="pcont">
      With a wealth of experience in web development, we are a team of dedicated creators driven by
      innovation and technical excellence.
      Our diverse portfolio includes successful collaborations with a wide range of clients, from
      startups to large enterprises.
      We are committed to crafting tailor-made websites that combine aesthetics, functionality,
      and performance. Our cutting-edge technical expertise enables us to embrace the latest
      technologies to meet each client's unique needs. We take pride in continuously pushing the boundaries
      of creativity to deliver exceptional online experiences.  
      </p>
      </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Projects