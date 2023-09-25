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
    </div>
    <div className="about-container">
      <About />
      </div> 
    </>
  );
}

export default App;
