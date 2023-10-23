import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "../redux/counter/actions";
import Count from "./Count";
import Button from "./Button";

export default function Counter(){
    const count = useSelector((state)=> state.value);
    const dispatch = useDispatch();
    
    const incrementHandler = () =>{
        dispatch(incrementCounter());2
    }

    const decrementHandler = () =>{
        dispatch(decrementCounter());
    }

    const resetHandler = () =>{
        dispatch(resetCounter());
    }

    return(
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count}/>
            <div class="flex space-x-3">
                <Button handler={incrementHandler} increment>Increment</Button>
                <Button handler={decrementHandler} decrement>Decrement</Button>
                <Button handler={resetHandler} reset>Reset</Button>
            </div>
        </div>
    )
}