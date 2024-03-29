import { Provider } from 'react-redux';
import './App.css';
import { store } from './Redux/store';
import DyHooksCounter from './components/DynamicCounter';
import HooksCounter from './components/HooksCounter';
import VariableCounter from "./components/VariableCounter";



function App() {


  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          <HooksCounter  />
          <DyHooksCounter  />
          <VariableCounter />
          <VariableCounter dynamic />
        </div>
      </div>
    </Provider>
  );
}



export default App;
