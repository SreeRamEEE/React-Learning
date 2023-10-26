import { useState, useEffect } from "react";

const UseEffectExample=()=>{
const [data, setData]=useState(0);
const [person,setPerson]=useState({name:"Sriramulu Gopu",city:"Hyderabad"});


const incremenetHandler=()=>{
    setData(data+1);
}

const changeCityHandler=()=>{
    setPerson({...person,city:"Machilipatnam"});
}

useEffect(()=>{
    console.log("Use Effect Called "+ data)
},[data]);
    return(
        <div>
            <center>
                <h2>useEffect Example</h2>

                <p>Count: {data}</p>
                <button onClick={()=>incremenetHandler()}>Increment</button>

                <p>My name is {person.name} and living in {person.city}</p>
                <button onClick={()=>changeCityHandler()}>Change City</button>
            </center>
        </div>
    )

}

export default UseEffectExample;