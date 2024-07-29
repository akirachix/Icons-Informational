import LandingPage from "./LandingPage";
import "./index.css";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Team from "./Team";


function App(){
  return (
    <div className='App'>
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <Services/>
      <Team/>
    </div>
  );
}
export default App;
