import React from "react";
import Home from "../components/Home";
import About from "../components/About"
function NavBar() {
  return <nav>NavBar
    <a href = "#home">Home</a>
   <a href = "#about">About </a>
   </nav>
}
export default NavBar;

//- a `<nav>` element
//- inside the nav element, there should be two child elements:
  //- an `<a>` element, with the `href` attribute set to `#home`, and the content
    //text set to "Home"
  //- an `<a>` element, with the `href` attribute set to `#about`, and the content
    //text set to "About"