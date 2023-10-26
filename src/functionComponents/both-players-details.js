
import { connect } from "react-redux";
import { incPlayerOne, decPlayerOne, incPlayerTwo, decPlayerTwo} from '../Actions';
const BothPlayersDetails=({incPlayerOne, decPlayerOne, incPlayerTwo, decPlayerTwo, playerOne, playerTwo})=>{

    return(
        <div>
            <center>
                <h2>Both Players details page</h2>

                <h3>Player1 details</h3>
    <p>Name:{playerOne.name} |{' '} score: {playerOne.score}</p><br/>
    <button onClick={()=>incPlayerOne()}> Increment</button>
    <button  onClick={()=>decPlayerOne()}> Decrement</button>
         
          <br/>

          <h3>Player2 details</h3>
    <p>Name:{playerTwo.name} |{' '} score: {playerTwo.score}</p><br/>
    <button onClick={()=>incPlayerTwo()}> Increment</button>
    <button  onClick={()=>decPlayerTwo()}> Decrement</button>
            </center>
        </div>
    )
}

const mapStateProps= state=>({
    playerOne:state.playerOne,
    playerTwo:state.playerTwo,
  })

export default  connect(mapStateProps,{incPlayerOne, decPlayerOne, incPlayerTwo, decPlayerTwo}) (BothPlayersDetails) ;