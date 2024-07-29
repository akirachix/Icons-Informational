import './index.css';

const Team = () =>{
    return(
        <div className='team-details'>

          <h1> Our Team</h1>  

          <section id='team-section1'>
            <div id='mwanasha'>
            <img src='/Images/mwanasha.jpg' className='image' alt='Mwanasha'/>
            <h3 className='h3a'>Ali Mwanasha</h3>
            </div>

            <div id='cynthia'>
            <img src='/Images/cynthia.jpg' className='image' alt='Cynthia'/>
            <h3 className='h3b'>Cynthia Matsitsa</h3>
          </div>

          </section>

          <section id='team-section2'>
            
            <div id='agnes'>
            <img src='/Images/Agnes.jpg' className='image' alt='Agnes'/>
            <h3 className='h3c'>Agnes Auma</h3>
            </div>

            <div id='shalom'>
            <img src='/Images/shalom.jpg' className='image' alt='Agnes'/>
            <h3 className='h3d'>Shalom Uwamahoro</h3>
            </div>

            <div id='racheal'>
            <img src='/Images/racheal.jpg' className='image' alt='Racheal'/>
            <h3 className='h3e'>Racheal Aber</h3>
            
          </div>
          </section>


        </div>
    )
}

export default Team;