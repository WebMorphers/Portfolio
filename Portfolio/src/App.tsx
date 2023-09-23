import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="hello-container">
        <Hello />
      </div>
    </div>
  );
}

export default App;
