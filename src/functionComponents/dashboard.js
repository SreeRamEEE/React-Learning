import { useParams } from "react-router";
import { Link } from "react-router-dom";
import BothPlayersDetails from './both-players-details';
import '../App.css'
function Dashboard(){
    const fetchData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>data.json()).then((result)=>{
            console.log(result)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const params= useParams();
   
    return(
        <div>
            <center>
                <h2>Dashboard Webpage loaded</h2>
                <h2>User Id is {params.userId}</h2>

                <BothPlayersDetails/>
                <br/><br/><br/>
                <Link className="customLink" to={'/'}>Back to Original Page</Link> 
                <br/><br/><br/>
                <button onClick={() => fetchData()}>fetch api</button>
            </center>
        </div>
    )
    }
    
    export default Dashboard;