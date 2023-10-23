import { combineReducers } from "redux";
import playeroneReducer from "./playerone";
import playertoweReducer from "./playertwo";

const reducer=combineReducers({
    playerOne:playeroneReducer,
    playerTwo:playertoweReducer
})

export default reducer;