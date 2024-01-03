const store = require("./app/store");
const {counterActions} = require("./features/counter/counterSlice");
const {dynamicCounterActions} = require("./features/dynamicCounter/dynamicCounterSlice");
const {fetchtodo} =require("./features/todo/todoSlice")

store.subscribe(() =>{
    console.log(store.getState());
    console.log("Break line");
});

//disptach actions
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());

store.dispatch(dynamicCounterActions.increment(2));
store.dispatch(dynamicCounterActions.increment(5));
store.dispatch(dynamicCounterActions.increment(5));
store.dispatch(dynamicCounterActions.decrement(2));

store.dispatch(fetchtodo());