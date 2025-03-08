import React, { useState } from "react";


export function Agevalidation(){
    const[userage,setuserage] = useState(true)
    // using If-else
    // if(userage){
    //     return (
    //         <div>you can vote</div>
    //     )
    // }else{
    //     return(
    //         <div>you cannot vote</div>
    //     )
    // }
    // using element varaible

    // let age;
    // if(userage){
    //     age = <div>You can vote</div>
    // }else{
    //     age = <div>You cannot vote</div>
    // }
    // return(
    //     <div>{age}</div>
    // )
// 3-> Turnary operator
return(

    <>
    {/* {userage ? <div>You can vote</div> : <div>You cannot vote</div>} */}
    {userage && <div>You can vote</div>}
    </>
)
}