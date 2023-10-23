import { Decrement, Increment, Reset } from "./actionIndentifire";

const initialState ={
        value: 0,
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case Increment:
            return{
                ...state,
                value: state.value + 1
            }
        case Decrement:
            return{
                ...state,
                value: state.value - 1
            }
        case Reset:
            return{
                ...state,
                value: 0
            }
    
        default:
            return state;
    }
}

export default reducer;