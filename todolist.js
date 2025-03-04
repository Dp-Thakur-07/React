import React, { act, useState } from "react";

function Todolist(){
    const [activity ,setactivity] = useState("")
    const [listData , setlistData] = useState([]);
    function addactivity(){
    //   setlistData([...listData , activity])
    //   console.log(listData);   it work asynchronasly

    setlistData((listData)=>{
        const updatelist = [...listData,activity];
        console.log(updatelist);
        setactivity('')
        return updatelist
        
    })
      
    }
    function removeactivity(i){
        const updatelistData = listData.filter((item,id)=>{
            return i!=id;
        })
        setlistData(updatelistData)
    }
    function removeall(){
        setlistData([])
    }
    return(
        <>
        <div className="container">
            <div className="header">TODO LIST</div>
            <input type="text" placeholder="add activity" value={activity} onChange={(e)=>
                setactivity(e.target.value)
            }/>
            <button onClick={addactivity}>Add</button>
            <p className="List-heading">here is your list :{")"}</p>
             {listData!=[] && listData.map((data,i)=>{
                return(
                    <>
                    <p key={i}>
                        <div className="listData">{data}</div>
                        <div className="btn-position"><button onClick={()=>removeactivity(i)}>remove(-)</button></div>
                    </p>
                    
                    </>
                )
             })}
             {listData.length>=1 && <button onClick={removeall}>Remove All</button>}
        </div>
        </>
    )
}

export default Todolist;