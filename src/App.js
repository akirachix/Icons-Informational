import Landing from "./Landing-page";
import AboutUs from "./Aboutus.js";
import Services from "./Services";
import "./index.css";
import { Navbar } from "./Navbar";


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Landing/>
      <AboutUs/>
      <Services/>
    </div>
  );
}

export default App;
