// The useReducer hook in React is an alternative to useState that is useful for managing complex state logic. It works similarly to Redux but is built into React.

// Easy Explanation of useReducer
// Think of useReducer as a more powerful version of useState. Instead of just setting a new state value, it allows you to update state based on an action and a reducer function.


const [state, dispatch] = useReducer(reducer, initialState);


// state → Holds the current state value.
// dispatch → A function used to send an action to update the state.
// reducer → A function that takes the current state and an action, then returns the new state.
// initialState → The starting value of the state.

import React, { useReducer } from "react";


const initialstate = 0;
const reduce = (state , action) =>{
   switch(action){
    case "increament":
      return state+1
    case "Decreament":
      return state-1
    default:
        return state

   }
}

function Counter(){
  const[count,dispatch] = useReducer(reduce , initialstate)

    return(
        <>
        <div className="app">
            <div>count is= {count}</div>
          <button onClick={()=>dispatch("increament")}>Increament</button>
          <button onClick={()=>dispatch("Decreament")}>Decreament</button>
        </div>
        </>
    )
}

export default Counter;
