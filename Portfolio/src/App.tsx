import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/projects/Projects";
import Links from "./components/Links/Links";
import "./app.css";

function App() {
  return (
    <div className="cmain">
      
      <Navbar />
      <div className="app-container">
        <div id="hello" className="hello-container">
          <Hello />
          <br />
          <br />
          <br /> 
          <Links />  
          <h1 className="text-3xl font-bold underline bg-white">
      Hello world!
    </h1>
          <span className="scroll-icon">
            <span className="scroll-icon__dot"></span>
          </span>
        </div>
      </div>

      <div id="about_us" className="about-container">
        <About />
      </div>
      <div id="projects" className="projects_container">
        <Projects />
      </div>
      <div id="contact" className="contact-container">
        <Contact />
      </div>

      <Footer />

    </div>
  );
}

export default App;
