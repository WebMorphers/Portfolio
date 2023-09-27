import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
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
        <span className="scroll-icon">
      <span className="scroll-icon__dot"></span> 
    </span>  
      </div>     
    </div>
    
    <div className="about-container">
      
      <About />
      </div> 
      <div className="contact-container">
      
      <Contact />
      </div> 

      <Footer />
    </>
  );
}

export default App;
