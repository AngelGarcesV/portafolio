import React from "react";


const Header = () => {
    return (
      <div
      style={{
        background:"#212529",
        top:0,
        display:"flex",
        justifyContent:"center",
        padding:"1.5rem",
        gap:"2rem",
        zIndex:10,
      }}
      >


        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        
        
      </div>
    );
  };
  
  export default Header;