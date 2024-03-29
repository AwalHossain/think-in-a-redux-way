import React from "react";
import { useDispatch } from "react-redux";
import colorSelectorThunk from "../Redux/thunk/colorSelector";
import deleteTodoThunk from "../Redux/thunk/deleteTodo";
import toggleTodoThunk from "../Redux/thunk/toggleTodo";
import cancel from "../images/cancel.png";
export default function Todo({todo}) {
  const dispatch = useDispatch();

  const handleChecked = (id) => {
    dispatch(toggleTodoThunk(id, todo?.completed))
  };

  const handleColor = (id, color) => {
    dispatch(colorSelectorThunk(id, color));
  };

  return (
    <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      <div class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
        <div
          class={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
            todo.completed && "border-green-500 focus-within:border-green-500"
          }`}
        >
          <input
            type="checkbox"
            checked={!todo.completed}
            onChange={() => handleChecked(todo.id)}
            class="opacity-0 absolute rounded-full"
          />

          {todo.completed && (
            <svg
              class=" fill-current w-3 h-3 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>

        <div class={`select-none flex-1 ${todo.completed && "line-through"}`}>
          {todo.text}
        </div>

        <div
          onClick={() => handleColor(todo.id, "green")}
          class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500  ${
            todo.color === "green" && " bg-green-500"
          }`}
        ></div>

        <div
          onClick={() => handleColor(todo.id, "yellow")}
          class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500  ${
            todo.color === "yellow" && " bg-yellow-500"
          }`}
        ></div>

        <div
          onClick={() => handleColor(todo.id, "red")}
          class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500  ${
            todo.color === "red" && " bg-red-500"
          }`}
        ></div>

        <img
        onClick={() => dispatch(deleteTodoThunk(todo.id))}
          src={cancel}
          class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
          alt="Cancel"
        />
      </div>
    </div>
  );
}
