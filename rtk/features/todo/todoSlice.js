const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')
const fetch = require("node-fetch")

const initialState =  {
    loading: false,
    todos:[],
    error:''
}

const fetchtodo = createAsyncThunk("todo/fetchtodo", async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    const todos = await response.json()
    return todos;
});

const todoSlice = createSlice({
    name:"todo",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchtodo.pending, (state,action)=>{
            state.loading=  true;
            state.error=  "";
        });
        builder.addCase(fetchtodo.fulfilled, (state, action)=>{
            state.loading=  false;
            state.todos= action.payload;
            state.error= "";
        });
        builder.addCase(fetchtodo.rejected, (state, action)=>{
            state.loading= false;
            state.todos= [];
            state.error= action.payload.message;
        });
    }
})

module.exports = todoSlice.reducer
module.exports.fetchtodo = fetchtodo 