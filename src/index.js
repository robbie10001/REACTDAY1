//we have deleted all of the files without our src folder.
//we are now going to rebuild it all to suit our needs. 


//the first thing we need to do is to use ES6 import statements.
//this is how we need to do it in REACT.
import React from "react";
import ReactDOM from "react-dom"; 
import App from "./components/App";
//1. we use import keyword. 
//2. we use a variable (React or ReactDOM)
/*
ReactDOM.render(
    <div>
         <h1>Hi There</h1>
            <p>This is my first react webpage! <span>IT'S VERY EXCITING!</span></p>
    </div>,
   
    document.getElementById("root")
);
*/
//We have to import REACT in order to use JSX
//we use ReactDOM to render any component. 
//Our line12 is JS code not HTML! ITS JSX!
//the next thing we need to do is bind it to where we want it in the app.
//Every component of REACT must only have one perent. 

//we have the ability to create our own functional components. 
//all it is is a single function. As below! 

/*

const Greeting = () => {
    return (
    <div>
        <p>Bonjour</p>
        <p>Hola!</p> 
    </div>
    );

};

ReactDOM.render(
    <div><Greeting/></div>,
    document.getElementById("root")
);

*/

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);






