import LandingPage from "./LandingPage";
import AboutUs from "./Aboutus.js";
import "./index.css";
import Navbar from "./Navbar";

function App(){
  return (
    <div className='App'>
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
    </div>
  );
}
export default App;
