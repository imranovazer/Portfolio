import React from "react";
import "./contactstyle.css" ;


export class Contacts extends React.Component
{
    render()
    {
        return (
            <div id="contacts" className="Contacts">

                <div className="icons">
                    <a href="https://www.facebook.com/azer.imranov.18" target="_blank" >
                    <img src="./icons/facebook.png"/>
                    Facebook
                    </a>
                    <a  >
                        <img src="./icons/gmail.png"/>
                        imranovazer@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/%D0%B0%D0%B7%D0%B5%D1%80-%D0%B8%D0%BC%D1%80%D0%B0%D0%BD%D0%BE%D0%B2-896b2b222/" target="_blank" >
                        <img src="./icons/linkedin.png"/>
                        Linkedin
                    </a>

                </div>
                <div className="adress">
                    <img src="./icons/home.png"/> 
                    Azerbaijan, Baku
                    
                </div>
                
            </div>
        )
    }
}