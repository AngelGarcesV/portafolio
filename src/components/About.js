import React , {Fragment}from "react";
import backg from "./images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"

const descriptionMe = "I'm working to be a fullstack develorper, with just over a year of experience, i've been working in web design, and working in the backend in web aplications\t"
+ "I'm a current student in Universidad de los llanos, and I was a participant in the Mintic 2022 project, which was taught by the National University of Colombia";


const description ="I consider myself a proactive, responsible and punctual person."
const skillList =[
    "Java",
    "JavaScript",
    "C++",
    "Python",
    "Html",
    "Css",
    "React",
    
]
let skill;

const About = ()=>{
    return(
        <section id="about" style={{
            display:"flex",justifyContent:"center"
        }}>
            <img src={backg} style={{
                width: "100vmax",
                height: "155%",
                zIndex: "-1",
                position: "absolute",
                top: "0",
                objectFit: "cover",
                }}
            ></img>
            <div className="aboutInfo">
                <h2>About me</h2>
                <p>{descriptionMe}</p>
                <ul 
                style={{
                    width:"45%",
                    textAlign: "left",
                    columns: 2,
                    fontSize: "1.25rem",
                    margin: "2rem auto",
                    gap: "3rem",
                }}>
                    <Fragment>
                        {
                            skillList.map((skill) => 
                                <li>{skill}</li>
                            )
                        }
                    </Fragment>
                </ul>
                
            </div>
        </section>
        
        
    )
}


export default About;