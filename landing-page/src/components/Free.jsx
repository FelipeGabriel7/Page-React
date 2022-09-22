import React from "react";
import imageComputer from "../images/illustration-laptop-desktop.svg";
import './free.css';

export function Free() {
  return (
    <>
      <section className="componentComputer">
        <div className="textComputer">
        <img src={imageComputer} />
        <div className="text">
        <div>
                <h2> Free , open , simple </h2>
                <p> Blogr is a free and opeen source application backed by a large <br/> 
                    community of helpful developers.It supports features such as code <br/>
                    syntax hightlightting , RSS feeds , social media integration , third-party <br/>
                    commenting tools , and works seamlessly width Goggle Analytics. The <br/>
                    architecture is clean and is relatively easy to learn.
                </p>
            </div>
            <div>
                <h2> Powerful tooling </h2>

                <p> Batteries included. We built a simple and straightforward CLI toll that <br/> 
                makes customization and deployment a breeze , but capable of 
                producing even the moost complicated sites.</p>
            </div>
        </div>
        </div>
      </section>
    </>
  );
}
