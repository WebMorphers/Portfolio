import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Projects from "./components/projects/Projects";
import About from "./components/About/About";
import Links from "./components/Links/Links";
import './app.css';


function App() {
  return (
    <>
    <Navbar />
    <div className="app-container"> 
    
      <div className="hello-container">
        <Hello />
        <br />
        <br /><br />
        <Links />  
        <div className='icon-scroll'></div>
      </div>
      
      <div className="about-container">
      <About />
      </div> 
      <br/>
      <h1 className="title"> </h1>
      <div  className="projects-container"> 
      </div>
    </div>
    </>
  );
}

export default App;
