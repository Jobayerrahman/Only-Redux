import Button from "./Button";
import Count from "./Count";

export default function Counter({id,increment,count,decrement}){
    return(
        <div class="p-4 h-auto flex justify-evenly items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count}/>
            <div class="flex flex-col items-center p-4">
            <button 
                class="bg-indigo-400 
                    text-white w-full 
                    px-3 py-2 m-4 
                    rounded shadow"
                onClick={increment}>
                    Increment
            </button>
            <button 
                class="bg-red-400 
                    text-white w-full
                    px-3 py-2 m-4 
                    rounded shadow"
                onClick={decrement}>
                    Decrement
            </button>
            <button 
                class="bg-gray-400 
                    text-white w-full
                    px-3 py-2 m-4 
                    rounded shadow">
                    Reset
            </button>
            </div>
        </div>
    )
}