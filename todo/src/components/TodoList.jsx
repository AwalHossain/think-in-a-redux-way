import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
  return (
       <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {
        todos.map((todo) => <Todo key={todo.id} todo={todo} />
        )
      }
       </div>
  );
}
