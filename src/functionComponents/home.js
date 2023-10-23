
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
function Home(){
   const getPath= new URLSearchParams(useLocation().search);
    return(
        <div>
            <center>
                <h2>Home Webpage loaded</h2>
                <h2>My Name is {getPath.get('name')} and my Age is {getPath.get('age')} </h2>
                <Link className="customLink" to={'/'}>Back to Original Page</Link> 
            </center>
        </div>
    )
    }
    
    export default Home;