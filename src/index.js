import React from 'react'; //React -> is a variable for the package 'react' (manage elements)
import ReactDOM from 'react-dom/client';  //ReactDOM -> render the elements into the documents

// .createElement() -> method for creating elements 3 parameter: 1.The Element 2.The Attribute 3.Inner Content
const div = React.createElement('div', null, [
  // creating children createElement by making the 3rd parameter to an array in then re-createElement
  React.createElement('h1', null, 'Hi'),
  React.createElement('p', null, 'Hello'),
  React.createElement('p', null, 'Hey'),
]);
const rootEl = document.querySelector('#root'); //.querySelector() -> to select the element root
const root = ReactDOM.createRoot(rootEl); //this function accepts element from the document

root.render(div); //display an element on the page by .render()
