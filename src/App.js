import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

const siteProps = {
  name:"Angel Garces",
  title: "System engineering Student",
  email:"angellgarces1024@gmail.com",
  github:"https://github.com/AngelGarcesV",
}

const primaryColor = "#212529";
const SecondaryColor = "#F8F9FA"


const App = () =>{
  return(
    <div id="main">
      <Header/>
      <Home name={siteProps.name} title = {siteProps.title}/>
      <About/>
    </div>
  );
}

export default App;