import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../Redux/thunk/fetchTodos';
import Todo from './Todo';

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((fetchTodos())
    )}, [dispatch]);
      console.log(todos,"check todos");

    const filterbyStatus = (todo)=>{
      const {status} = filters;
      switch (status) {
        case "All":
          return todo;
        case "Complete":
          return todo.completed
        case "Incomplete":
          return !todo.completed
      
        default:
          return todo; 
      }
    }

    const filterbyColor = (todo)=>{
      const {colors} = filters;
      if(colors.length === 0){
        return todo;
      }
      return colors.includes(todo?.color);
    }


  return (
       <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {
        todos.filter(filterbyStatus)
        .filter(filterbyColor)
        .map((todo) => <Todo key={todo.id} todo={todo} />
        )
      }
       </div>
  );
}
