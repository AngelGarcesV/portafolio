import React from "react";
import imgGitHub from "../images/github.png";


const projects = [
    {
        name:"gw-project",
        description:"this is a group project, it's a bicicle shop with a front-end made using Html,Css and bootstrap, and the tecnologies used in the backend are Django with a database in Posgresql",
        link:"https://github.com/AngelGarcesV/gw-project/tree/master/prub"
    },
    {
        name:"OOP-UniversityProject",
        description:"This is a final project to the opp subject, made in c++ following the univerity requirements",
        link:"https://github.com/AngelGarcesV/OOP-UniversityProject",
    },
    {
        name:"My Portfolio",
        description:"This is my personal portfolio, i'm using it to learn react and share my projects",
        link:"https://github.com/AngelGarcesV/portafolio"
    },
    {   
        name:"Registraduria-Mintic",
        description:"This is a web aplication, made using the microservices architecture, we have 2 microservices, votes and security services, performed in SpringBoot and Flask respectively",
        link:"https://github.com/wesvh/registraduriaMinTIC"
    }
]

const Portfolio = () =>{
   return(
        <section id="portfolio">
                <div style={{
            paddingTop:"5% ",
            display:"flex",
            
            flexWrap:"wrap",
            gap:"5%",}}>
                    {
                        projects.map((proj)=>(
            
                                <a href={proj.link} target="_blank" rel="noreferrer" style={{
                                    width:"25%",
                                    height:"15rem",
                                    margin:" 2rem auto ",
                                    padding:"2rem",
                                    background:"#FFFFFF",
                                    borderRadius:"1.5rem"
                                }}>
                                    <h2>{proj.name}</h2>
                                    <p>{proj.description}</p>
                                    <img src={imgGitHub} alt="github" style={{
                                        zIndex:"10",
                                        width:"2rem",
                                        position:"sticky",
                                        left:"95%",
                                        bottom:"100%"
                                    }}></img>
                                </a>
                            
                        ))
                    }
                </div>
                
        </section>
   ) 
}

export default Portfolio