import React from "react";
import "./navbar.css";


export function Navbar({children}) {

  function clickButtonMobile(){
    const list = document.querySelector('.list');
    list.classList.toggle('active')
  }


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

          <div className="menuMobile" onClick={() => clickButtonMobile()}>
            <p className="mobile"> <hr/></p>
            <p className="mobile"> <hr /></p>
            <p className="mobile"> <hr /></p>

          </div>

        </div>
      </nav>

      {children}
    </div>
  );
}
