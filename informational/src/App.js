
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import AboutUs from "./Aboutus.js";
import "./index.css";
import Navbar from "./Navbar";


const App = ()=>{
  
  return (
    <div className='App'>
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <CallToAction/>
      <Footer/>
    </div>
  );

}
export default App;

