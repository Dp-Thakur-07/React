import React, { useState } from "react";

export default function AddContact({addContact}){
    const[contactData , setContactData] = useState({name:"",email:""});

const handledata =(e)=>{
        e.preventDefault();
        if(e.target.name === "name"){
            setContactData({...contactData , name:e.target.value})
        }else{
            setContactData({...contactData , email:e.target.value})

        }
    }

    const handleadd = ()=>{
        if(contactData.name ==="" || contactData.email ===""){
            alert("please enter the all details");
            return
        }
       addContact(contactData)  
       setContactData({name:"",email:""})      
    }
    return (
        <div className="formHeader">
            <div className="add-contact">Add Contact</div>
            <form>
                <label>Name:</label><br/>
                <input type="text" placeholder="Enter Name" name="name" value={contactData.name} onChange={handledata}/> <br/>
                <label>Email:</label><br/>
                <input type="email" placeholder="Enter Email" name="Email" value={contactData.email} onChange={handledata}/>
            </form>
            <button className="btn" onClick={handleadd}>Add Contacts</button>
        </div>
    )
}