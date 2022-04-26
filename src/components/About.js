import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
  <h2>About Me</h2>
  <p>I don't know what I am doing. I am hoping for the best.</p>
  <img src={ image } 
  alt = "I made this"/>
  </div>;
}

export default About;

//an `<h2>` element with the content of "About Me"
  //- a `<p>` element with any content of your choosing
  //- an `<img>` element with the `src` attribute set to the imported `image`
    //variable, and the `alt` attribute set to "I made this"