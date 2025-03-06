// Custom Hooks in React (Easy Explanation)
// A custom hook in React is just a JavaScript function that starts with use and allows you to reuse logic across multiple components. It helps avoid code duplication and keeps components clean.

// Why Use Custom Hooks?
// Reusability → Write once, use in multiple components.
// Separation of Concerns → Keeps logic separate from UI.
// Cleaner Code → Reduces repeated code in components.

// Counter1.js =>

    import React from "react";
import useCounter from "./useCounter";

function Counter1(){
    const[count,increament,Decreament] = useCounter();

    return(
     <div>
        <div>{count}</div>
        <button onClick={increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
     </div>
    )
}

export default Counter1

// Counter2.js  =>

    import React from "react";
import useCounter from "./useCounter";

function Counter2(){
    const[count,increament,Decreament] = useCounter(10);

    return(
     <div>
        <div>{count}</div>
        <button onClick={increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
     </div>
    )
}

export default Counter2

//useCounter.js

import { useState } from "react";



function useCounter(initialvalue =0){
    const[count,setCount] = useState(initialvalue);

    function increament(){
        setCount(count+1)
    }
    function Decreament(){
        setCount(count-1)
    }

    return [count,increament,Decreament];


}

export default useCounter
