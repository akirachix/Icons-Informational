import './index.css'

const Services=()=>{
return(
    <div className="container">
        <div className="text-container">
       <div className='text-paths'>
        <img src="./images/paths.png" alt="" className='photo'></img>
        <ul><h2>Structured Learning Paths</h2>
       <li>Guided curriculum designed to enhance digital literacy systematically.</li> 
<li>Clear progression through levels or modules, tailored to individual needs.</li> </ul>
       </div>
       <div className='text-resource'>
       <img src="./images/resources.png" alt="" className='photo'></img>
        <ul><h2>Resource Library</h2>
       <li>Extensive collection of educational materials, tutorials, and lesson plans.</li> 
<li>Easily searchable database categorized by subject, topic, and difficulty level.</li> </ul>
       </div>
       <div className="text-development">
       <img src="./images/development.png" alt="" className='photo'></img>
        <ul><h2>Professional Development Opportunities</h2><li>Workshops, webinars, and training sessions led by experts and experienced educators.</li>
<li>Continuous learning programs customized for rural Kenyan teachers.</li></ul></div>
    </div>
    <div className="text">
       <div className='text-community' >
       <img src="./images/community.png" alt="" className='photo'></img>
        <ul><h2>Community Engagement</h2>
<li>        Discussion forums and online communities for collaboration and knowledge exchange.</li>
<li>Peer support networks promoting interaction and professional growth. </li></ul>
       </div>
       <div className='text-progress'>
       <img src="./images/progress.png" alt="" className='photo'></img>
        <ul><h2>Progress Tracking</h2><li>Personalized progress tracker to monitor learning achievements and skill development.</li>
<li>Visual representation of progress through badges, certificates, or milestones.</li></ul></div>

<div className="text-interface">
<img src="./images/interface.png" alt="" className='photo'></img>
    <ul><h2>User-Friendly Interface</h2><li>Intuitive dashboard layout for easy navigation and accessibility.</li>
<li>Optimized design for various devices and internet connectivity levels.</li></ul></div>

    </div>
    </div>
)  
}
export default Services;