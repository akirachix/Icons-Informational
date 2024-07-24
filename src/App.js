import AboutUs from "./Aboutus.js";
import Services from "./Services";
import "./index.css";
import { Navbar } from "./Navbar";
import LandingPage from "./Landing-page";


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <Services/>
    </div>
  );
}

export default App;
