import { Increment, Decrement } from "./actionIndentifire";

export const incrementCounter = (counterId) =>{
    return {
        type : Increment,
        payload: counterId
    }
}

export const decrementCounter = (counterId) =>{
    return {
        type: Decrement,
        payload: counterId
    }
}