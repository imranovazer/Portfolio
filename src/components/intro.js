import React from "react";
import "./introstyle.css"
import ava from "./profile.jpg"

export class Intro extends React.Component
{
    render()
    {
        return (
            <div className="i" id="intro">
                <div className="i-left">
                    <h1 className="Hi">Hi my name is Azer</h1>
                    <h2>I am interested in :</h2>
                    <ul>
                       <li>Front-end web dev</li> 
                       <li>Back-end web dev</li> 
                       <li>Software dev</li> 

                    </ul>
                    <div className="aboutme">
                        <h4>About me :</h4>
                        <p>
                            I am second year student at Azerbaijan French university(UFAZ). My specalization is Computer Science.
                            I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
                        </p>
                        
                    </div>
                
                </div>
                <div className="i-right">
                    <img src={ava}/>
                    

                    
                </div>
                
            </div>
        )

            
            
    }
}