const {createSlice} = require("@reduxjs/toolkit");

const initialState ={
    count: 0,
};

const dynamicCounter = createSlice({
    name: "dynamiCounter",
    initialState,
    reducers:{
        increment: (state,action) =>{
            state.count += action.payload;
        },
        decrement: (state,action) =>{
            state.count -= action.payload;
        }
    }
});

module.exports = dynamicCounter.reducer;
module.exports.dynamicCounterActions = dynamicCounter.actions;