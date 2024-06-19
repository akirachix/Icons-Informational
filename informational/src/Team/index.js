import './index.css';

const Team = () =>{
    return(
        <div className='team-details'>

          <h1> Our Team</h1>  

          <section id='sec1'>
            <div id='mwanasha'>
            <img src='/Image/mwanasha.jpg' className='image' alt='Mwanasha'/>
            <h3>Ali Mwanasha</h3>
            </div>

            <div id='cynthia'>
            <img src='/Image/cynthia.jpg' className='image' alt='Cynthia'/>
            <h3>Cynthia Matsitsa</h3>
          </div>

          </section>

          <section id='sec2'>
            
            <div id='agnes'>
            <img src='/Image/Agnes.jpg' className='image' alt='Agnes'/>
            <h3>Agnes Auma</h3>
            </div>

            <div id='shalom'>
            <img src='/Image/shalom.jpg' className='image' alt='Agnes'/>
            <h3>Shalom Uwamahoro</h3>
            </div>

            <div id='racheal'>
            <img src='/Image/racheal.jpg' className='image' alt='Racheal'/>
            <h3>Racheal Aber</h3>
          </div>
          </section>


        </div>
    )
}

export default Team;