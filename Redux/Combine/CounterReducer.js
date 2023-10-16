const { Increment, Decrement  } = require("./ActionIndentifires");

//Initial States Counter
const initialCounterState = {
    count :0
};

// Counter reducer
const counterReducer = (state =initialCounterState, action) =>{
    switch(action.type){
        case Increment:
            return {
                ...state,
                count : state.count + 1
            }
        case Decrement:
            return {
                ...state,
                count : state.count - 1
            }
        default:
            return state;
    }
}

module.exports = counterReducer;