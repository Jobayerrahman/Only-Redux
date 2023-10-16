const { createStore, combineReducers } = require("redux");
const { counterReducer } = require("./CounterReducer"); 
const { userReducer } = require("./UserReducer")


// Root reducer
const rootReducer = combineReducers(
{
    counterReducer,
    userReducer
}
)

//Store 
const Store = createStore(rootReducer);

Store.subscribe(()=>{
    console.log(Store.getState());
})

//Dispatch action
Store.dispatch(incrementCount);
Store.dispatch(decrementCount);
Store.dispatch(incrementCount);
Store.dispatch(incrementCount);
Store.dispatch(incrementCount);
Store.dispatch(incrementCount);
Store.dispatch(decrementCount);