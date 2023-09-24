import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Projects from "./components/projects/Projects";
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
      </div>
      <br/>
      <h1 className="title">Our Projects</h1>
      <div  className="projects-container">
        <Projects />
      </div>
    </div>
    </>
  );
}

export default App;
