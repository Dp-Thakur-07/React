import React, { useEffect, useState } from "react";

function Form(){

    const data = {name:"" , email:"" , password:""};
    const [inputData , setInputData] = useState(data)
    const [flag , setflag] = useState(false);

    useEffect(()=>{
        console.log("registerd");
        
    },[flag])

    function handledata(e){
        setInputData({...inputData , [e.target.name]:e.target.value})
        console.log(inputData);
        
    }

    function handlesubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fielda are mandatory ")
        }else{
            setflag(true)
        }
        setInputData({ name: "", email: "", password: "" });
    }
  

    return(
        <>
        <pre>{(flag)?<h2 className="ui-define">Hello {inputData.name} you have succesfully registerd</h2>:""}</pre>
       <form className="container" onSubmit={handlesubmit}>
        <div className="header">
        <h1>Registration Form</h1>
        </div>
        <div>
            <input type="text" placeholder="enter your name" name="name" value={inputData.name} onChange={handledata}></input>
        </div>
        <div>
            <input type="text" placeholder="enter your email" name="email" value={inputData.email} onChange={handledata}></input>
        </div>
        <div>
            <input type="password" placeholder="enter your password " name="password" value={inputData.password} onChange={handledata}></input>
        </div>
        <div>
            <button type="submit">submit</button>
        </div>
       </form>
       </>
    )
}

export default Form;