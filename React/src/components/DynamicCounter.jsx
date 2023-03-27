import { useDispatch, useSelector } from "react-redux";
import { Ddecrement, Dincrement } from "../Redux/dynamic/dyAction";

const DyHooksCounter = ({}) => {
  const count = useSelector((state) => state.dynamicCounter.value);

  const dispatch = useDispatch();

  const dyIncrement = (value) => {
    dispatch(Dincrement(value));
  };
  const dyDecrement = (value) => {
    dispatch(Ddecrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={()=> dyIncrement(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dyDecrement(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};


export default DyHooksCounter;
