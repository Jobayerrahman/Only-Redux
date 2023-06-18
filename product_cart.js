const { createStore, combineReducers } = require("redux");

//Product variable define
const Add_Product = "Add_Product";
const Get_Products = "Get_Products";

//Cart variable define
const Add_Cart_Item  = "Add_Cart_Item ";
const Get_Cart_Items = "Get_Cart_Items";

//Product state initialization
const initailProductState = {
    products      : [ "Books", "Pen"],
    numofproducts : 2
}

//Cart state initialization
const initailCartState = {
    products      : [ "Books", "Pen"],
    numofproducts : 2
}

//Product actions 
const addProduct = (product) =>{
    return{
        type    : Add_Product,
        payload : product
    }
}

const getProducts = () =>{
    return{
        type    : Get_Products
    }
}

//Cart actions
const addCartItem = (product) =>{
    return{
        type    : Add_Cart_Item,
        payload : product
    }
}

const getCartItems = () =>{
    return{
        type    : Get_Cart_Items
    }
}

// Product Reducer 
const productReducer = (state=initailProductState, action) =>{
    switch(action.type){
        case Get_Products:
            return{
                ...state,
            }
        case Add_Product:
            return{
                products      : [...state.products, action.payload],
                numofproducts : state.numofproducts + 1
            }
        default:
            return state;
    }
};

// Cart Reducer 
const cartReducer = (state=initailCartState, action) =>{
    switch(action.type){
        case Get_Cart_Items:
            return{
                ...state,
            }
        case Add_Cart_Item:
            return{
                products      : [...state.products, action.payload],
                numofproducts : state.numofproducts + 1
            }
        default:
            return state;
    }
};

//Combine Store
const rootReducer = combineReducers({productReducer,cartReducer})

//store
const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(getProducts());
store.dispatch(addProduct("Bag"));
store.dispatch(addProduct("Pencils"));

store.dispatch(getCartItems());
store.dispatch(addCartItem("Note books"));
store.dispatch(addCartItem("Condoms"));