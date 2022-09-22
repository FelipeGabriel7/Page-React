import React from "react";
import image from "../images/illustration-editor-desktop.svg";
import "./future.css";

export function Future() {
  return (
    <div>
      <h1 className="title"> Design of the future</h1>
          <section className="contentFuture">
        <div className="componentText">
          <div>
        <h2> Introducing an extensible editor </h2>
            <p>
              {" "}
              Blogr features an exceedingly intuitive interface which lets you <br/>
              focus on one thing: creating content.The editor supports <br/>
              management of videos and Markdown .Extensibility with plugins and <br/>
              themes provide easy ways to add functionallity or change the looks <br/>
              of a blog.
            </p>
          </div>

          <div>
            <h2> Robust content management </h2>
            <p>
              {" "}
              Flexible content management enables users to easyly move throught <br/>
              posts. Increase the usability of your blog by adding customized <br/>
              categories , sections format, or flow. width this functionality , <br/>
              you re in full control.
            </p>
        </div>
        </div>

          <img src={image}/>
      </section>
    </div>
  );
}
