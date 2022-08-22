import { useState } from "react";

interface Value {
    value: Number
}

const Counter = () => {
    const [state, setState] = useState(0);

    const increment = ()=> {
        setState(prevCount => prevCount +1)
    };
    const decrement = () =>{
        
        setState(prevCount => prevCount -1);
    }
    
  return (
    <div>
    <div className="max-w-md mx-auto mt-10 space-y-5">
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold" id="counter">{state}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    id="increment"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    id="decrement"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Counter