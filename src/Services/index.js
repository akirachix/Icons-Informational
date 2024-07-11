import './index.css'

const Services=()=>{
return(
    <div className="container">
        <div className="text-container">
       <div className='paths-container'>
        <img src="/Images/paths.png" alt="" className='photo'></img>

        <h2>Structured Learning Paths</h2>
        <ul>
           
       <li>Guided curriculum designed to enhance digital literacy systematically.</li> 
<li>Clear progression through levels or modules, tailored to individual needs.</li> </ul>
       </div>
          <div className='progress-container'>
       <img src="/Images/progress.png" alt="" className='photo'></img>
       <h2>Progress Tracking</h2>

        <ul>
            <li>Personalized progress tracker to monitor learning achievements and skill development.</li>
<li>Visual representation of progress through badges, certificates, or milestones.</li></ul>
</div>
       <div className="development-container">
       <img src="/Images/development.png" alt="" className='photo'></img>
       <h2>Professional Development Opportunities</h2>
        <ul><li>Workshops, webinars, and training sessions led by experts and experienced educators.</li>
<li>Continuous learning programs customized for rural Kenyan teachers.</li></ul></div>
    </div>
    <div className="text">
       <div className='community-container' >
       <img src="/Images/community.png" alt="" className='photo'></img>
       <h2>Community Engagement</h2>
        <ul>
<li>        Discussion forums and online communities for collaboration and knowledge exchange.</li>
<li>Peer support networks promoting interaction and professional growth. </li></ul>
       </div>
    
 <div className='resource-container'>
       <img src="/Images/resources.png" alt="" className='photo'></img>
       <h2>Resource Library</h2>
        <ul>
       <li>Extensive collection of educational materials, tutorials, and lesson plans.</li> 
<li>Easily searchable database categorized by subject, topic, and difficulty level.</li> </ul>
       </div>

<div className="interface-container">
<img src="/Images/interface.png" alt="" className='photo'></img>
<h2>User-Friendly Interface</h2>
    <ul><li>Intuitive dashboard layout for easy navigation and accessibility.</li>
<li>Optimized design for various devices and internet connectivity levels.</li></ul></div>

    </div>
    </div>
)  
}
export default Services;