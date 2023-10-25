import React from "react";
import Counter from './Counter';
import Stats from './Stats';
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/counter/actions";

export default function AppContainer(){
    const state = useSelector((state)=>state);
    const dispatch =  useDispatch();

    const incrementHandler = (id) =>{
        dispatch(incrementCounter(id));
    }

    const decrementHandler = (id) =>{
        dispatch(decrementCounter(id));
    }

    const totalCount = () =>{
           return state.reduce((total,counter)=> total + counter.count, 0)
    }
    return(
        <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">

              <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                  Simple Counter Application
              </h1>

              <div class="max-w-md mx-auto mt-10 space-y-5">
                    {state.map((count)=> (
                      <Counter 
                        key={count.id} 
                        id={count.id} 
                        count={count.count} 
                        increment={() => incrementHandler(count.id)} 
                        decrement={() => decrementHandler(count.id)}
                      />
                    ))}
              </div>

              <div class="max-w-md mx-auto mt-10 space-y-5">
                  <div
                      class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                  >
                    <Stats count={totalCount()} />
                  </div>
              </div>
        </div>
    )
}