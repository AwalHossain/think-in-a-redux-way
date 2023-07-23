import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment, incremnetByNumber } from './redux/feature/counter/counterSlice';

function App() {
  const dispatch = useAppDispatch();
  const {value}  = useAppSelector(state => state.counter);
  return (
    // counter app with use tailwindcss classname
    
    <div className="App">
      <button className='space-x-4 border-2 border-red-500' onClick={()=> dispatch(increment())}>
        Increment 
      </button>
      <span className='block'>{value}</span>
      <button
      onClick={()=> dispatch(incremnetByNumber(5))}
      className='border-2 border-green-500'>
        Increment by 5
      </button>
      <button className='border-2 border-green-500'>
        Decrement
      </button>

    </div>

  );
}

export default App;
