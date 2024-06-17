import './index.css';

const AboutUs =()=>{
    return(

        
        <div className='aboutus-sections'>
<h1 className='about-us'>About Us</h1>
            <div className='aboutus-section'>
            
            <div className='mission'>
                <img src='/media/mission.png'id='mission-icons'/>
                <h2  className='heading-mission'>Our Mission</h2>
                <p>
                    Through EduKeri, our mission is to transform the 
                    landscape of education in Kenya, making digital literacy 
                    a cornerstone of teaching and learning.
                </p>

            </div>


            <div className='mission'>
                <img src='/media/values.png' id='values-icons'/>
                <h2 className='heading-mission'>Our Values</h2>
                <p>
                    Integrity guides our actions, ensuring that our efforts 
                    are transparent, accountable, and focused on delivering real
                     impact in the communities we serve.
                </p>

            </div>


            <div className='mission'>
                <img src='/media/vision.png' id='vision-icons'/>
                <h2 className='heading-mission'>Our Vision</h2>
                <p>Our vision is to create a digitally literate teaching 
                    force in rural Kenya, transforming classrooms into 
                    vibrant hubs of innovation and learning
                </p>

            </div>
            </div>

           
        </div>
    )
}

export default AboutUs;