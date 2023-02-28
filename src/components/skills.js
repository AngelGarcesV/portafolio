import React from "react";
import imgSpring from "../images/spring.png";
import imgReact from "../images/React-icon.png"
import imgFlask from "../images/Flask.png";
import imgPostman from "../images/postman.png";
import imgTerminal from "../images/terminal.png";
import imgPostgresql from "../images/Postgresql.png";
import imgGitHub from "../images/github.png";
import imgMongo from "../images/Mongo.png";
const Languages =[
    "Java",
    "JavaScript",
    "C++",
    "Python",
    "Html",
    "Css",
    "React",  
]

const Frameworks = [
    {
        name:"Springboot",
        img: imgSpring

    }
    ,{
        name:"Flask",
        img: imgFlask
    },{
        name:"React",
        img: imgReact
    },
    
    
]
const Tools = [
    {
        name:"Linux",
        img:imgTerminal
    },
    {
        name:"gitHub",
        img: imgGitHub,
    },
    {
        name:"postgresql",
        img:imgPostgresql
    },
    {
        name:"MongoDb",
        img:imgMongo
    },
    {
        name:"Postman",
        img:imgPostman
    }

]

const Skills =()=>{
    return(
        <section id="skills" style={{
            display:"flex",
            justifyContent:"center",
            background:"#EFEFEF"
        }}>
            
            <div className="skill">
                <h2 style={{textAlign:"center"}}>lANGUAGES</h2>
                <ul style={{
                    textAlign: "left",
                    columns: 2,
                    fontSize: "1.25rem",
                    margin: "2rem 3rem",
                    gap: "3rem",
                }}>
                {Languages.map((lang) => (
            <li key={lang}>{lang}</li>
            
          ))}
                </ul>
                
            </div>
            <div className="skill" style={{
            
            }}>
                <h2 style={{textAlign:"center"}}>FRAMEWORKS</h2>
                <div className="FrameContainer">
                    {Frameworks.map((frame) =>(
                        <div className="fr">
                            <img style={{
                                    width:"5rem"
                                }} src={frame.img}></img>
                            <p>{frame.name}</p>
                        </div>
                        
                    ))}
                </div>
                
            </div>
            <div className="skill">
                <h2 style={{textAlign:"center"}}>TOOLS</h2>
                <div className="FrameContainer">
                    {Tools.map((tool) =>(
                        <div className="fr">
                            <img style={{
                                    width:"5rem"
                                }} src={tool.img}></img>
                            <p>{tool.name}</p>
                        </div>
                        
                    ))}
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default Skills;