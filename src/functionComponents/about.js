import { Link } from "react-router-dom";

import { incPlayerOne, decPlayerOne} from '../Actions';
import { connect } from 'react-redux';
function About({playerOne,incPlayerOne,decPlayerOne}){
return(
    <div>
        <center>
        <h2> About Us Page</h2>
        <h3>Player1 details</h3>
    <p>Name:{playerOne.name} |{' '} score: {playerOne.score}</p><br/>
    <button onClick={()=>incPlayerOne()}> Increment</button>
    <button  onClick={()=>decPlayerOne()}> Decrement</button>
          <div>
          <br/>
          <Link className="customLink" to={'/'}>Back to Original Page</Link> 
          </div>
        </center>
      
    </div>
)
}
const mapStateProps= state=>({
    playerOne:state.playerOne,
  })

export default connect(mapStateProps,{incPlayerOne,decPlayerOne}) (About);