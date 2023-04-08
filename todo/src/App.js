import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
    <div className="">
      <div
        class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        {/* <!-- navbar --> */}
  
        <Navbar />
        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* <!-- header --> */}
            <Header />
          <hr class="mt-4" />

          {/* <!-- todo list --> */}
            <TodoList />

          <hr class="mt-4" />

          {/* <!-- footer --> */}
          <Footer />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
