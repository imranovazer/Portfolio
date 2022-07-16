import React  from "react";
import "./navbarstyle.css"
import icon from "./navbaract.jpg"

export class Navbar extends React.Component
{
    constructor(props)
    {
        super(props) ;
        this.state ={isClicked:false} ;

    }
    // Clicked()
    // {
    //     this.setState ({isClicked:!this.state.isClicked});
    // }
    
    render()
    {
        
        
        return (
            <div className={this.state.isClicked ? "Navbar Act" : "Navbar"} >
                <div className="icon" onClick={(event) => {
                event.preventDefault();
                this.setState((oldState) => ({
              isClicked: !oldState.isClicked,
            }));
          }}>
                    <img src={icon} />
                </div>

                <ul>
                        <li><a href="#intro">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
            </div>

        ) ;
        
        
    }
    

}