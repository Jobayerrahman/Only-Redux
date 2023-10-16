const {createStore} = require("redux");

const { combineReducers } =  require("redux");

const Increment = "Increment";
const Decrement = "Decrement";
const Adduser  = "Adduser";

//state

const initialCounterState = {
    count :0
};

const initialUserState = {
    user : [ "jhon Smit"]
}

//action

const incrementCount = () =>{
    return {
        type: Increment,
    };
}

const decrementCount = () =>{
    return {
        type : Decrement,
    }
}

const addUser = (user) =>{
    return {
        type : Adduser,
        payload: user,
    }
}

//Reducers
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

const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case Adduser:
            return {
                user : [...state.user, action.payload],
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({counterReducer,userReducer})

//Store 
const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

//Dispatch action
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(addUser('Jara Smit'));