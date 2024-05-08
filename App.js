import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div", {id : "parent"}, 
     [
     React.createElement("div", {id : "child"}, 
     [React.createElement("h1", {}, "this is a h1 tag..!"),
     React.createElement("h2", {}, "this is a h2 tag..!"),]), // multiple members or siblings are passed in the list or array.
        React.createElement("div", {id : "child"}, 
     [React.createElement("h1", {}, "this is a h1 tag of child 2..!"),
        React.createElement("h2", {}, "this is a h2 tag of child 2..!"),
    ]),
    ]);
const root = ReactDOM.createRoot(document.getElementById("sachin"));
root.render(parent); //helps to put react in the html page .
