const  Store  = require("./Store")
const { incrementCount, decrementCount, addUser } = require("./ActionCreator");

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