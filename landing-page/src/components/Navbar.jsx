import React from "react";
import "./navbar.css";


export function Navbar({children}) {
  return (
    <div className="containerNavbar" style={{backgroundImage: "url(/background.jpg)"}}>
      <nav>
        <div className="nav">
          <div className="navbar">
            <h1> Blogr </h1>

            <ul className="list">
              <li> Product </li>
              <li> Company </li>
              <li> Connect </li>
            </ul>
          </div>

          <div className="sign">
            <p> Login </p>
            <button> Sign Up</button>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
}
