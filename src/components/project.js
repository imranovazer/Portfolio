import React from "react";
import "./project.css"

export class Project extends React.Component
{


    render()
    {
        return (
            <div className="profile">
                
                <a href={this.props.link } target="_blank">

                    <img src={this.props.src} />
                </a>

            </div>


        )
    }
}