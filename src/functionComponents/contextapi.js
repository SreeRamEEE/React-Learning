
import { incPlayerTwo, decPlayerTwo} from '../Actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
const Reduxexample=({playerTwo,incPlayerTwo,decPlayerTwo})=>{
    
        return(
            <div>
                <center>
                <h2>Redux Example Page</h2>
                    <h3>Player2 details</h3>
    <p>Name:{playerTwo.name} |{' '} score: {playerTwo.score}</p><br/>
    <button onClick={()=>incPlayerTwo()}> Increment</button>
    <button  onClick={()=>decPlayerTwo()}> Decrement</button>

    
          <div>
          <br/>
          <Link className="customLink" to={'/'}>Back to Original Page</Link> 
          </div>
      
                </center>
            </div>
        )
}
const mapStateProps= state=>({
    playerTwo:state.playerTwo,
  })
export default connect(mapStateProps,{incPlayerTwo,decPlayerTwo}) (Reduxexample);