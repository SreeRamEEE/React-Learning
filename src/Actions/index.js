export const incPlayerOne=()=> async dispatch=>{
    dispatch({
        type:"INCREMENT_PLAYER_ONE_SCORE"
    })
}

export const decPlayerOne=()=> async dispatch=>{
    dispatch({
        type:"DECREMENT_PLAYER_ONE_SCORE"
    })
}

export const incPlayerTwo=()=> async dispatch=>{
    dispatch({
        type:"INCREMENT_PLAYER_TWO_SCORE"
    })
}

export const decPlayerTwo=()=> async dispatch=>{
    dispatch({
        type:"DECREMENT_PLAYER_TWO_SCORE"
    })
}