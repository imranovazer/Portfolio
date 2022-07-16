import React from "react";
import  "./projectsstyle.css"
import { Project } from "./project";
import { projects_data } from "../data/projectdata";

export class Projects extends React.Component
{
    render()
    {
        return(

            <div id="projects" className="Projects">
                <h1 className="lol">Here you cane look through my simple projects</h1>

             
                     {
                    
                     projects_data.map((element)=>
                     (
                         <Project id={element.id} src={element.src} link={element.link} /> 
                     ))
                  
                }

               
                
            </div>
        )
    }
}