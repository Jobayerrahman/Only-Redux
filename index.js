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
    user : [ "jobayer Rahman"]
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
    if(action.type == Increment){
        return {
            ...state,
            count : state.count + 1
        }
    }
    else if (action.type == Decrement){
        return {
            ...state,
            count : state.count - 1
        }
    }
}

const userReducer = (state = initialUserState, action) => {
    if(action.type == Adduser ){
        return {
            user : [...state.user, action.payload],
        }
    }
}

const rootReducer = combineReducers({
    counterR : counterReducer,
    userR    : userReducer
})

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
store.dispatch(addUser('Ojayer'));