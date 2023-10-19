import React from 'react'; //React -> is a variable for the package 'react' (manage elements)
import ReactDOM from 'react-dom/client';  //ReactDOM -> render the elements into the documents
import Page from './Page'; //import the ./Page file with Page as our name for Import. Must be same name to the Component
import './style.css'; // import style by the help of webpack

const rootEl = document.querySelector('#root'); //.querySelector() -> to select the element root
const root = ReactDOM.createRoot(rootEl); //this function accepts element from the document

//special function for executing another function on an interval.
setInterval(function () {
  root.render(<Page />);  //change to component calling
}, 1000);

