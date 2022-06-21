import React from "react";
import  ReactDOM  from "react-dom";
import { Intro } from "./components/intro";
import  "./mainstyle.css"
import { Projects } from "./components/projects";
import { Contacts } from "./components/contacts";
import { Navbar } from "./components/navbar";




class Body extends React.Component
{
  render()
  {
    return  (
      <div className="Main">
        <Intro/>
        <Projects/>
        <Contacts/>
        <Navbar/>
      
      
      </div>

      
    ) ;
  }
}

ReactDOM.render(<Body/>,document.getElementById("root")) ;