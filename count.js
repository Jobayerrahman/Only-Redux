const {createStore} = require("redux")

//Variable define
const Increment = "Increment";
const Decrement = "Decrement";
const Reset     = "Reset";

//State
const initialCounterState = {
    count : 0,
}

//Action 
const incrementCounter = (value) =>{
    return{
        type: Increment,
        payload: value,
    }
}

const  decrementCounter = (value) =>{
    return{
        type: Decrement,
        payload: value
    }
}

const resetCounter = () =>{
    return{
        type: Reset
    }
}

//Reducer
const counterReducer = (state= initialCounterState, action) =>{
    if(action.type == Increment){
        return{
            ...state,
            count : state.count + action.payload
        }
    }
    else if(action.type == Decrement){
        return{
            ...state,
            count : state.count - action.payload
        }
    }
    else if(action.type == Reset){
        return{
            count : 0
        }
    }
}

//Store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

//Dispatch action
store.dispatch(incrementCounter(20));
store.dispatch(decrementCounter(11));
store.dispatch(resetCounter());
store.dispatch(incrementCounter(2));