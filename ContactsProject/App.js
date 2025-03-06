import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import Contactlist from './Components/Contactlist';
import Header from './Components/Header';
import uuid4 from 'uuid4';

function App() {
  const localstorageKey = "contact";
 const[contact,setcontact] = useState(()=>{
  return JSON.parse(localStorage.getItem(localstorageKey))
 ||[]});

 useEffect(()=>{
   localStorage.setItem(localstorageKey,JSON.stringify(contact));
 },[contact])

  const addContact=(data)=>{
   setcontact([...contact,{id: uuid4(),data} ])
   
  }
  const removeContact=(id)=>{
    const updatedlist = contact.filter((val)=>{
      return val.id!==id;
     
    })
    setcontact(updatedlist)
  }
  return (
    <div>
     <Header/>
     <AddContact addContact={addContact}/>
     <Contactlist contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
