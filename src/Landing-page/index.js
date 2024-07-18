import './index.css'

const Landing = () =>{
    return(
        <div className='landing'>
            <div className='overlay'>
                <h1>Empowering Rural Teachers with digital skills</h1>
                <p>Join us in transforming classrooms in Kenya</p>
                <div className='buttons'>
                    <button className='sign-in-button'>Sign in</button>
                    <button className='sign-up-button'>Sign up</button>  
                </div>
            </div>
        </div>
    );
}
export default Landing;