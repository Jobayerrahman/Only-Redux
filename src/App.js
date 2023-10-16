import logo from './logo.svg';
import './App.css';
import Stats from './components/Stats';
import { useState } from 'react';
import Counter from './components/Counter';

// initial state 

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

function App() {
  const [count, setCount] = useState(initialState);


  const totalCount = () =>{
    return count.reduce((total,counter)=> total + counter.count, 0)
  }

  const increment = (id) =>{
    const updatedState = count.map((count)=>{
      if(count.id === id){
        return{
          ...count,
          count: count.count + 1,
        }
      }
      return {...count}
    })
    setCount(updatedState);
  }

  const decrement = (id) =>{
    const updatedState = count.map((count)=> {
      if(count.id === id){
        return{
          ...count,
          count: count.count - 1,
        }
      }
      return {...count}
    })
    setCount(updatedState);
  }

  return (
    <div className="App">
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">

            <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div class="max-w-md mx-auto mt-10 space-y-5">
                  {count.map((count)=> (
                    <Counter 
                      key={count.id} 
                      id={count.id} 
                      count={count.count} 
                      increment={increment} 
                      decrement={decrement}
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
    </div>
  );
}

export default App;
