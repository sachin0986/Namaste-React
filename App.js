import { header } from "express/lib/request";
import React from "react";
import ReactDOM from 'react-dom/client';

// React.createElement => Object => HTMLElement(render)
 /*this is not user or Devloper friendly so we use JSX 
for making it easy to write or understand */

//root.render(heading);

//JSX is a HTML like syntax it is not a HTML & JSX is just a syntax

const Heading = () => (
    <h1>This is a functional Component</h1>
)

const number = 10000;



const AlertComponent = () => {
    {number}
    alert("this is a alert message...1");  
}

const message = React.createElement("div", {}, React.createElement("button", {onClick : AlertComponent}, "Show Alert"))
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Heading />)

