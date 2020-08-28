import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./types";

export const addtodoAction = todo => ({
    type: ADD_TODO,
    payload: todo
})

export const deleteTodo = id => ({
    type: DELETE_TODO, payload: id
})

export const edittodo = ({ title, content, id }) => ({
    type: EDIT_TODO, payload: { title, content, id }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO, payload: id
})