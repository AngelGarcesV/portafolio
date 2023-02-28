import React from "react";
import PropTypes from "prop-types";
import image from "./images/IMG_20230110_100056_696.jpg"

const Home = ({name,title})=>{
return(


    <section 
    style={{
        display:"flex",
        background:"#FFFFFF",
        padding:"2rem"
        }}>
        
            <img src={image}
            style={{
                width:"20%",
                marginLeft:"10%",
                marginRight:"15%"
            }}
            ></img>
            <div>
                <h1>Hello, I'm { name }</h1>
                <h2>{ title}</h2>
            </div>     
    </section>
)
}




export default Home