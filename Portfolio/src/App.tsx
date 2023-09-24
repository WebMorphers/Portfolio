import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="hello-container">
        <Hello />
      </div>
      <br/>
      <h1 className="title">Our Projects</h1>
      <div  className="projects-container">
        <Projects />
      </div>
    </div>
  );
}

export default App;
