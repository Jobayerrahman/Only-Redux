import { Increment, Decrement } from "./actionIndentifire";

const initialState = [
    {
        id: 1,
        count: 0,
    },
    {
        id: 2,
        count: 0,
    },
];

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case Increment:
            return state.map((counter)=>{
                if(counter.id !== action.payload ){
                    return counter
                }

                return{
                    ...counter,
                    count: counter.count + 1 
                }
            })
        
        case Decrement:
            return state.map((counter) =>{
                if( counter.id === action.payload){
                    return{
                        ...counter,
                        count: counter.count - 1
                    }
                }
                
                return counter
            })
    
        default:
            return [...state];
    }
}


export default reducer;