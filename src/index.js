import React from 'react'; //React -> is a variable for the package 'react' (manage elements)
import ReactDOM from 'react-dom/client';  //ReactDOM -> render the elements into the documents
import './style.css'; // import style by the help of webpack

function Header(props) { //added parameter for the property to pass on the component, props param is an object 
  const clock = Date().toLocaleString();
  return (
  <h1 className="orange">Hello {props.name} {clock}</h1> //props.name access the props object with a property of name
  ); //JSX syntax for adding expression {clock}
}

// converter the variable to a function to avoid memory leak
function Page() {
  const name = 'John'; // variable for the data property

  // changed to JSX formatting for better readability and clean code
  // <Header /> component for the function Header()
  return (
    <>
      <Header name={name} /> 
      <p>Hey</p>
      <p>Hi</p>
    </>
  );
}
const rootEl = document.querySelector('#root'); //.querySelector() -> to select the element root
const root = ReactDOM.createRoot(rootEl); //this function accepts element from the document

//special function for executing another function on an interval.
setInterval(function () {
  root.render(<Page />);  //change to component calling
}, 1000);

