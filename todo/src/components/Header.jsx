import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addTodoThunk from '../Redux/thunk/addTodo';
import { allCompleteTodo, clearCompleteTodo } from '../Redux/todos/action';
import dobleTick from '../images/double-tick.png';
import notes from '../images/notes.png';
export default function Header() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodoThunk(input))

  };
  const handleAllTask = () => {
    dispatch(allCompleteTodo()) 
  };

  const handleClearTask = () => {
    dispatch(clearCompleteTodo())
  }

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} class="w-6 h-6" alt="Add todo" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          class="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={()=> handleAllTask()} class="flex space-x-1 cursor-pointer">
          <img class="w-4 h-4" src={dobleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={()=> handleClearTask()} class="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}
