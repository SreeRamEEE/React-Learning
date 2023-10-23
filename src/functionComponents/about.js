import { Link } from "react-router-dom";
// import { Store1 } from "../App";
// import { useContext } from "react";
// import Contextapi from "./contextapi";
function About(){
    // const [data,setData]=useContext(Store1);
//    const eventHandler=()=>{
//         setData({name:"Gopu"})
//     }
return(
    <div>
        <center>
            {/* <h2>About Webpage loaded {data.name}</h2> */}
            {/* <button onClick={eventHandler}> update </button><br/><br/><br/> */}
            <Link className="customLink" to={'/'}>Back to Original Page</Link> 
        </center>
        {/* <Contextapi></Contextapi> */}
      
    </div>
)
}

export default About;