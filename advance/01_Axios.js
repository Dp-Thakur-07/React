// Axios is a popular JavaScript library used in React to make HTTP requests (like getting data from an API or sending data to a server). It helps you communicate with backend services easily.

// Why use Axios in React?
// ✅ Simplicity – Makes API calls easier than using fetch().
// ✅ Automatic JSON Handling – Converts response data into JSON automatically.
// ✅ Error Handling – Provides better error messages.
// ✅ Supports Async/Await – Works smoothly with modern JavaScript.

import React, { useEffect, useState } from "react";
import axios from 'axios'

function Axios(){
    const[userdata , setdata] = useState(null);
    
      const fetchuser = ()=>{

            axios.get("https://randomuser.me/api/")
            .then((response)=>{
             setdata(response.data.results[0])
             console.log(response.data.results[0]);
            })
            .then((error)=>{
                console.log("fetching error ,", error);
                
            })
       }
         

     
    return(
        <div>
        <h2>Axios Tutorial</h2>
        <button onClick={fetchuser}> random user</button>
        {userdata ? (
                <div>
                  <p>Name: {userdata.name.first} {userdata.name.last}</p>
                  <p>Email: {userdata.email}</p>
                  <img src={userdata.picture.medium} alt="User" />
                </div>
              ) : (
                <p>Loading...</p>
           )}
      </div>
    );
}

export default Axios;