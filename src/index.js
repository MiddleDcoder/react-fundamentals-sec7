import React from 'react'; //React -> is a variable for the package 'react' (manage elements)
import ReactDOM from 'react-dom/client';  //ReactDOM -> render the elements into the documents
import './style.css'; // import style by the help of webpack

function Header(){
  const clock = Date().toLocaleString();
  return <h1 className="orange">Hello Wolrd {clock}</h1>; //JSX syntax for adding expression {clock}
}

// converter the variable to a function to avoid memory leak
function Page() {
  // changed to JSX formatting for better readability and clean code
  // <Header /> component for the function Header()
  return (
    <>
      <Header /> 
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

