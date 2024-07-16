import './index.css';


const AboutUs =()=>{
    return(

        
        <div className='aboutus-sections' id='aboutpage'>
<h1 className='about-us'>About Us</h1>
            <div className='aboutus-section'>
            
            <div className='mission'>
                <img src='/Images/mission.png' id='mission-icons'alt='mission' />
                <h2  className='heading-mission-mission'>Our Mission</h2>
                <p id="content-mission"> 
                    Through EduKeri, our mission is to transform the 
                    landscape of education in Kenya, making digital literacy 
                    a cornerstone of teaching and learning.
                </p>

            </div>


            <div className='mission'>
                <img src='Images/values.png' id='values-icons' alt='values'/>
                <h2 className='heading-mission-values'>Our Values</h2>
                <p id="content-values">
                    Integrity guides our actions, ensuring that our efforts 
                    are transparent, accountable, and focused on delivering real
                     impact in the communities we serve.
                </p>

            </div>


            <div className='mission'>
                <img src='/Images/vision.png' id='vision-icons' alt='vision'/>
                <h2 className='heading-mission'>Our Vision</h2>
                <p id="content">Our vision is to create a digitally literate teaching 
                    force in rural Kenya, transforming classrooms into 
                    vibrant hubs of innovation and learning.
                </p>

            </div>
            </div>

           
        </div>
    )
}

export default AboutUs;