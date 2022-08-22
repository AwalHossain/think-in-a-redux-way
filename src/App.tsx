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

  const [state, setState] = useState<any>(initialState)
  console.log(state, "oo");


  const totalNum = () => {

    return state.reduce((total: any, curr: any) => total + curr.count, 0)
  }

  console.log(totalNum());

  const increment = (id: any) => {
    let updateCounter = state.map((c: any) => {
      if (c.id == id) {
        return {
          ...c,
          count: c.count + 1
        }
      }
    })

    setState(updateCounter);
  }

  const deccrement = (id: any) => {
    const updateCounter = state.map((c: any) => {
      if (c.id == id) {
        return {
          ...c,
          count: c.count - 1
        }
      }
    })

    setState(updateCounter)
  }




  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      {/* <!-- header --> */}
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div>
        <Counter />
        <Counter />
      </div>
      <div>
        <TotalCount state={totalNum()} />
      </div>
    </div>
  );
}

export default App;
