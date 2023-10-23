import { Increment, Decrement, Reset } from "./actionIndentifire";


export const incrementCounter  = () =>{
    return{
        type: Increment
    }
}

export const decrementCounter = () =>{
    return{
        type: Decrement
    }
}

export const resetCounter = () =>{
    return{
        type: Reset
    }
}
