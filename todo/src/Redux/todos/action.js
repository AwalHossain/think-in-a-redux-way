
// write action creators for the todos

import { ADD_TODO, ALLCOMPLETE_TODO, CLEARCOMPLETE_TODO, COLORSELECT_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";



export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
    }

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id,
    };
    }

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
    }


export const allCompleteTodo = () => {
    return {
        type: ALLCOMPLETE_TODO,
    };
    }

export const clearCompleteTodo = () => {
    return {
        type: CLEARCOMPLETE_TODO,
    };
    }


export const colorSelectTodo = (id, color) => {
    return {
        type: COLORSELECT_TODO,
        payload: {
            id,
            color,
        },
    };
    }





