import Landing from "./Landing-page";
import AboutUs from "./Aboutus.js";
import "./index.css";
import { Navbar } from "./Navbar";


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Landing/>
      <AboutUs/>
    </div>
  );
}

export default App;
