import Landing from "./Landing-page";
import "./index.css"


export const Navbar = () => {
  return(
      <nav className = "navbar">
          <div className='navbar-logo' >
              <img src="/images/logo.png"></img>
          </div>
          <div className='links'>
              <ul className='links'>
                  <li><a href=''>Home</a></li>
                  <li><a href=''>About us</a></li>
                  <li><a href=''>Our services</a></li>
                  <li><a href=''>Team</a></li>
                  <li><a href=''>Contacts</a></li>
              </ul>
          </div>
      </nav>

  );
}

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;

