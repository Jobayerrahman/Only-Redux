const configureStore = require("@reduxjs/toolkit").configureStore;
const {createLogger} = require("redux-logger");

const counterReducer = require("../features/counter/counterSlice");
const dynamicCounter = require("../features/dynamicCounter/dynamicCounterSlice");
const todosSlice     = require("../features/todo/todoSlice");

const logger = createLogger();

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounter,
        todo:todosSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;