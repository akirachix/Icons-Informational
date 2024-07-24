import LandingPage from "./LandingPage";
import "./index.css";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Services from "./Services";


function App(){
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
