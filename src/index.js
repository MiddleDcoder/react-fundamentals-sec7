import React from 'react'; //React -> is a variable for the package 'react' (manage elements)
import ReactDOM from 'react-dom/client';  //ReactDOM -> render the elements into the documents

// converter the variable to a function to avoid memory leak
function Page() {
  // .createElement() -> method for creating elements 3 parameter: 1.The Element 2.The Attribute 3.Inner Content
  return React.createElement('div', null, [
    React.createElement('h1', null, `Hi ${Date().toLocaleString()}`), //added date to current local time
    React.createElement('p', null, 'Hello'),
    React.createElement('p', null, 'Hey'),
  ]);
}
const rootEl = document.querySelector('#root'); //.querySelector() -> to select the element root
const root = ReactDOM.createRoot(rootEl); //this function accepts element from the document

//special function for executing another function on an interval.
setInterval(function () {
  root.render(Page());  //display an element on the page by .render()
}, 1000);

