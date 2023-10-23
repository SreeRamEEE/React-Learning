const initialState={
    name:"Sriram",
    score:79
}

export default function playeroneReducer(state=initialState, action){
const {type,payload}=action;

switch(type){
   
    case "INCREMENT_PLAYER_ONE_SCORE":
        
        return {...state,score:state.score+1}
        case "DECREMENT_PLAYER_ONE_SCORE":
            return {...state,score:state.score-1}
        default:
        return state;
}

}