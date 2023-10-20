import React from 'react';

export default function () {
    const [count, setCount] = React.useState(0);

    // function to handle the click callback behavior we want
    function handleClick(event) { 
        event.preventDefault(); //we pass in the object event and access the preventDefault to avoid changing the url
        setCount((previousValue) => previousValue + 1); // change the value by returning a function increment by 1
    }
    //the JSX anchor and the event listener onClick with the event handler handleClick function
    return (
        <a href="#" onClick={handleClick}>
            Count: {count}
        </a>
    );
}