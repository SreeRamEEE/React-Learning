import { Store1 } from "../../App";
import { useContext } from "react";

const UseContextExample= ()=>{
    const [data,setData]=useContext(Store1);

    return(
        <div>
            <center>
                <h2>useContext example</h2>
                <p>{data.name}</p>
            </center>
        </div>
    )
}

export default UseContextExample;