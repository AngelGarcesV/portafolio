import React from "react";
import PropTypes from "prop-types";
import image from "../images/IMG_20230110_100056_696.jpg"

const homeinfo ="a developer,System engineer student, and a pasionate of the tecnology, i also like the desing, listen to music and play games";

const Home = ({name,title})=>{
return(


    <section id="home"
    style={{
        display:"flex",
        background:"#FFFFFF",
        padding:"6% 0",
        }}>
        
            <img src={image}
            style={{
                width:"17%",
                marginLeft:"10%",
                marginRight:"15%"
            }}
            ></img>
            <div style={{margin:"auto 0"}}>
                <p>Hello! 👋</p> 
                <p>I'm <strong>{ name }</strong> {homeinfo}</p>
                <h3>Welcome to my website</h3>
            </div>     
    </section>
)
}




export default Home