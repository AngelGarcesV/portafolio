import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/skills";
import Portfolio from "./components/Portfolio";

const siteProps = {
  name:"Angel Garces",
  title: "System engineering Student",
  email:"angellgarces1024@gmail.com",
  github:"https://github.com/AngelGarcesV",
}


const App = () =>{
  return(
    <div id="main">
      <Header/>
      <Home name={siteProps.name} title = {siteProps.title}/>
      <About/>
      <Skills/>
      <Portfolio/>
      
    </div>
  );
}

export default App;