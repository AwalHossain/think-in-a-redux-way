import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChangeFilter, statusChangeFilter } from '../Redux/Filter/actions';

  const numberOfTodos = (no_of_todos)=>{
      switch(no_of_todos){
          case 0:
              return "No task ";
          case 1:
              return "1 task ";
          default:  
            return `${no_of_todos} tasks`
  }
}

export default function Footer() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const todos = useSelector((state) => state.todos);
  const {colors, status} = filters;

  const todosRemaining = todos.filter((todo) => !todo.completed).length

  const handleColorChange = (color) => {
    console.log(color);
      if(colors.includes(color)){
        dispatch(colorChangeFilter(color, "removed"));
      }
      else{
        dispatch(colorChangeFilter(color, "added"));
      }
  };

  const handleStatusChange = (status) => {
    console.log(status);
    dispatch(statusChangeFilter(status));
  };


  return (
    <div class="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)} left</p>
      <ul class="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange("All")}
          class={`cursor-pointer ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Incomplete")}
          class={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Complete")}
          class={`cursor-pointer ${status === "Complete" && "font-bold"}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          } `}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          class={`h-3 w-3 border-2 border-red-500 ${
            colors.includes("red") && "bg-red-500"
          }  md:hover:bg-red-500 rounded-full cursor-pointer`}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          class={`h-3 w-3 border-2 border-yellow-500 ${
            colors.includes("yellow") && "bg-yellow-500"
          } md:hover:bg-yellow-500 rounded-full cursor-pointer`}
        ></li>
      </ul>
    </div>
  );
}
