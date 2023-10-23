const initialState={
    name:"Gopu",
    score:69
}

export default function playertoweReducer(state=initialState, action){
const {type,payload}=action;

switch(type){
    case "INCREMENT_PLAYER_TWO_SCORE":
        return {...state,score:state.score+1}
        case "DECREMENT_PLAYER_TWO_SCORE":
            return {...state,score:state.score-1}
        default:
        return state;
}

}