import React from "react";
import phone from '../images/illustration-phones.svg';
import background from '../images/bg-pattern-circles.svg';
import './state.css'

export function State(){
    return(
        <div className="phonesComponent" style={{backgroundImage: `url(${background})`}}>
            <div className="imagePhones">
                <img src={phone}/>
            </div>
            <div className="textPhones">
                <h1> State of the Art Infrastructure </h1>
                <p> With reliability and speed in mind, worldwide data centers provide the <br/>
                    backbone for ultra-fast connectivity.This ensures your site will load <br/>
                    instantly, no matter where your readers are , keeping your site competitive.
                </p>
            </div>
        </div>
    )
}