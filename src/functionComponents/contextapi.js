// import { Store1 } from "../App";
// import { useContext } from "react";
import { incPlayerTwo, decPlayerTwo} from '../Actions';
import { connect } from 'react-redux';
const Contextapi=({playerTwo,incPlayerTwo,decPlayerTwo})=>{
    
// const [data,setData]=useContext(Store1);
        return(
            <div>
                <center>
                    {/* <h2>Context API example {data.name}</h2> */}
                    <h3>Player2 details</h3>
    <p>Name:{playerTwo.name} |{' '} score: {playerTwo.score}</p><br/>
    <button onClick={()=>incPlayerTwo()}> Increment</button>
    <button  onClick={()=>decPlayerTwo()}> Decrement</button>
                </center>
            </div>
        )
}
const mapStateProps= state=>({
    playerTwo:state.playerTwo,
  })
export default connect(mapStateProps,{incPlayerTwo,decPlayerTwo}) (Contextapi);