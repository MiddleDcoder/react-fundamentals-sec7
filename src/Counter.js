import React from 'react';

export default function () {
    const [count, setCount] = React.useState(0);

    //check if the count item exists in the storage. If it does, we should set the initial value of the count state to the count from the local storage
    React.useEffect(() => {
        if(localStorage.getItem('count')) {
            setCount(parseInt(localStorage.getItem('count')));
        }
    }, []);

    //Track the count variable that when updated we will run a function to store in storage
    React.useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

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