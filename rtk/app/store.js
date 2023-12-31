const configureStore = require("@reduxjs/toolkit").configureStore;
const {createLogger} = require("redux-logger");

const counterReducer = require("../features/counter/counterSlice");
const dynamicCounter = require("../features/dynamicCounter/dynamicCounterSlice");

const logger = createLogger();

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounter,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;