import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import TotalCount from './components/TotalCount';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
]

function App() {

  const [state, setState] = useState(initialState)
  console.log(state, "oo");


  const totalNum = () => {

    return state.reduce((total, counter) => total + counter.count, 0)
  }

  console.log(totalNum());

  const increment = (id) => {
    let updateCounter = state.map((c) => {
      if (c.id == id) {
        return {
          ...c,
          count: c.count + 1
        }
      }

      return {...c};
    })

    setState(updateCounter);
  }

  const decrement = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id == id) {
        return {
          ...c,
          count: c.count - 1
        }
      }

      return {...c};
    })

    setState(updateCounter)
  }




  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
     
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div>
        {
          state.map((c) => (
            <Counter
              key={c.id}
              increment={increment}
              decrement={decrement}
              count={c.count}
              id={c.id}
            />
          ))
        }
      </div>
      <div>
        <TotalCount state={totalNum()} />
      </div>
    </div>
  );
}

export default App;
