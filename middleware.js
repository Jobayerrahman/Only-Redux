const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//varible define
const Get_Products = "Get_Products";
const Add_Product  = "Add_Product ";

//State Initialization

const initialProductState ={
    products : ["Books", "Pen"]
}

// Action
const add_Product = (product) =>{
    return{
        type    : Add_Product,
        payload : product
    }
}

const get_Products = ()=>{
    return{
        type : Get_Products
    }
}

// Reducer

const productReducer = (state=initialProductState, action)=>{
    switch(action.type){
        case get_Products:
            return{
                ...state
            }
        case add_Product:
            return{
                products: [...state.product, action.payload]
            }
        default:
            return state;
    }
}


//Store 

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState());
});


//dispatch action

store.dispatch(get_Products());
store.dispatch(add_Product("Note Books"));
store.dispatch(get_Products());
store.dispatch(add_Product("Medicine"));
