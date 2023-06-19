//Variable define

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const Get_User_Request = "Get_User_Request";
const Get_User_Success = "Get_User_Success";
const Get_User_Failed = "Get_User_Failed";
const Api_Url = "https://jsonplaceholder.typicode.com/user";
//State initialization

const initialUserState = {
    user        : [],
    isloading   : false,
    error       : null
}


//Action defining 

const getUserRequest = () =>{
    return{
        type: Get_User_Request
    }
}

const getUserSuccess = (user) =>{
    return{
        type    : Get_User_Success,
        payload : user
    }
}

const getUserFailed = (err) =>{
    return{
        type    : Get_User_Failed,
        payload : err
    }
}

//Creating Reducer

const userReducer = (state=initialUserState, action) =>{
    switch(action.type){
        case Get_User_Request:
            return{
                ...state,
                isloading : true,
            }
        case Get_User_Success:
            return{
                ...state,
                isloading : false,
                user      : action.payload,
            }
        case Get_User_Failed:
            return{
                ...state,
                isloading : false,
                error     : action.payload,
            }
        default:
            return state;
    }
}

//async action 
const fetchData = () =>{
    return (dispatch) =>{
        dispatch(getUserFailed());
        axios.get(Api_Url)
        .then((res)=>{
            const user      = res.data;
            const username  = user.map((user)=>user.username);
            dispatch(getUserSuccess(username));
        })
        .catch((err) => {
            const errMessage = err.message;
            dispatch(getUserFailed(errMessage));
        });
    }
}


//Store
const store = createStore(userReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(fetchData())