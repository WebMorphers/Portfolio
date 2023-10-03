import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/projects/Projects"; 
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="hello">
        <Hello />
      </div>
      <div id="about_us">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div> 
      <Footer />

    </>
  );
}

export default App;
