import './index.css'

const Services=()=>{
return(
    <div className="container" id='services'>
        <div className="text-container">
       <div className='paths-container'>
        <img src="/Images/community.png" alt="" className='photo'></img>

        <h2>Structured Learning Paths</h2>
        
           
       <li>Guided curriculum designed to enhance digital literacy systematically.</li> 
       <li>Clear progression through levels or modules, tailored to individual needs.</li> 
       </div>
          <div className='progress-container'>
       <img src="/Images/development.png" alt="" className='photo'></img>
       <h2>Progress Tracking</h2>
            <li>Personalized progress tracker to monitor learning achievements and skill development.</li>
            <li>Visual representation of progress through badges, certificates, or milestones.</li>
</div>
       <div className="development-container">
       <img src="/Images/united.png" alt="" className='photo'></img>
       <h2>Professional Development Opportunities</h2>
        <li>Workshops, webinars, and training sessions led by experts and experienced educators.</li>
        <li>Continuous learning programs customized for rural Kenyan teachers.</li></div>
    </div>
    <div className="text">
       <div className='community-container' >
       <img src="/Images/COMMUNITY.png" alt="" className='photo'></img>
       <h2>Community Engagement</h2>
        <li>Discussion forums and online communities for collaboration and knowledge exchange.</li>
        <li>Peer support networks promoting interaction and professional growth. </li>
       </div>
    
 <div className='resource-container'>
       <img src="/Images/resources.png" alt="" className='photo'></img>
       <h2>Resource Library</h2>
        
       <li>Extensive collection of educational materials, tutorials, and lesson plans.</li> 
       <li>Easily searchable database categorized by subject, topic, and difficulty level.</li> 
       </div>

<div className="interface-container">
<img src="/Images/interface.png" alt="" className='photo'></img>
<h2>User-Friendly Interface</h2>
    <li>Intuitive dashboard layout for easy navigation and accessibility.</li>
    <li>Optimized design for various devices and internet connectivity levels.</li></div>

    </div>
    </div>
) ;
};
export default Services;