import React , {Fragment}from "react";

const descriptionMe = "I'm working to be a fullstack develorper, with just over a year of experience, i've been working doing the backend for web aplications, and web design\t"
+ "I'm a current student in Universidad de los llanos, and I was a participant in the Mintic 2022 project, which was taught by the National University of Colombia";



const About = ()=>{
    return(
        <section id="about" style={{
            display:"flex",justifyContent:"center"
        }}> 
            <div className="aboutInfo">
                <h2>About me</h2>
                <p>{descriptionMe}</p>
                <hr/>
                
                
            </div>
        </section>
        
        
    )
}


export default About;