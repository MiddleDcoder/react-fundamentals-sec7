import React from 'react'; //React -> is a variable for the package 'react' (manage elements)
import ReactDOM from 'react-dom/client';  //ReactDOM -> render the elements into the documents
import './style.css'; // import style by the help of webpack

// converter the variable to a function to avoid memory leak
function Page() {
  // changed to JSX formatting for better readability and clean code
  return (
    <>
      <h1 className="orange">Hello Wolrd</h1>
      <p>Hey</p>
      <p>Hi</p>
    </>
  );
}
const rootEl = document.querySelector('#root'); //.querySelector() -> to select the element root
const root = ReactDOM.createRoot(rootEl); //this function accepts element from the document

//special function for executing another function on an interval.
setInterval(function () {
  root.render(Page());  //display an element on the page by .render()
}, 1000);

