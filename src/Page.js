import React from 'react';
import { Header } from './Header'; //importing the ./Header file with the { Header } function 

// converter the variable to a function to avoid memory leak
export default function() {
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