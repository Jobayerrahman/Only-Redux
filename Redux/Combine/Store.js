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

module.exports = Store;