import logo from './logo.svg';
import './App.css';
import Stats from './components/Stats';
import { useState } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import CounterApp from './components/CounterApp';
// initial state 

// const initialState = [
//   {
//       id: 1,
//       count: 0,
//   },
//   {
//       id: 2,
//       count: 0,
//   },
// ];

function App() {
  // const [count, setCount] = useState(initialState);


  // const totalCount = () =>{
  //   return count.reduce((total,counter)=> total + counter.count, 0)
  // }

  // const increment = (id) =>{
  //   const updatedState = count.map((count)=>{
  //     if(count.id === id){
  //       return{
  //         ...count,
  //         count: count.count + 1,
  //       }
  //     }
  //     return {...count}
  //   })
  //   setCount(updatedState);
  // }

  // const decrement = (id) =>{
  //   const updatedState = count.map((count)=> {
  //     if(count.id === id){
  //       return{
  //         ...count,
  //         count: count.count - 1,
  //       }
  //     }
  //     return {...count}
  //   })
  //   setCount(updatedState);
  // }

  return (
    <Provider store={store}>
      <div className="App">
        <CounterApp/>
      </div>
    </Provider>
  );
}

export default App;
