import React from "react"; //always use this so we can use the package of react

export function Header(props) { //added parameter for the property to pass on the component, props param is an object 
    const clock = Date().toLocaleString();
    return (
    <h1 className="orange">Hello {props.name} {clock}</h1> //props.name access the props object with a property of name
    ); //JSX syntax for adding expression {clock}
  }