import './App.css';

function App() {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
    {/* <!-- header --> */}
    <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
    </h1>
{/* 
    <!-- counters --> */}
    <div className="max-w-md mx-auto mt-10 space-y-5">
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold" id="counter">4</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    id="increment"
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    id="decrement"
                >
                    Decrement
                </button>
            </div>
        </div>

        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold" id="counter2">0</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    id="increment2"
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    id="decrement2"
                >
                    Decrement
                </button>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
