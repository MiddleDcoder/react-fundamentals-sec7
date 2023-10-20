import React from "react"; //always use this so we can use the package of react

export function Header(props) { //added parameter for the property to pass on the component, props param is an object 
    let [clock, setClock] = React.useState(Date().toLocaleString()); //useState for re-render the component

    console.log(clock);

    setInterval(() => {
      setClock(Date().toLocaleString()); //setCLock function that lets you update the state to a different value and trigger a re-render.
    }, 1000);

    console.log('Executed');

    return (
    <h1 className="orange">Hello {props.name} {clock}</h1> //props.name access the props object with a property of name
    ); //JSX syntax for adding expression {clock}
  }