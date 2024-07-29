import LandingPage from "./LandingPage";
import "./index.css";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import CallToAction from "./CallToAction";



function App(){
  return (
    <div className='App'>
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <Services/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
export default App;
