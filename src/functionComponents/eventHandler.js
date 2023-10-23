import { useState } from "react";

function EventHandler(){
const [name,setName]=useState('I am new user');
const alertEvent=()=>console.log(name)
const changeEevntHandler=(e)=>setName(e.target.value)
return(
    <div>
    <h2>{name}</h2>
        <input value={name} type="text" placeholder="Please enter your name" onChange={(event)=>changeEevntHandler(event)}/>
        <button onClick={()=>{alertEvent()}}>click me</button>
    </div>
)
}

export default EventHandler;