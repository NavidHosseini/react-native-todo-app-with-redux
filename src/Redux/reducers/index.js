import { ADD_TODO, DELETE_TODO, EDIT_TODO,TOGGLE_TODO } from '../actions/types'

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => 
                  todo.id === payload.id ? payload : todo  
                )
              }
              case TOGGLE_TODO:
                return {
                  ...state,
                  todos: state.todos.map(todo =>
                    todo.id === payload ? { ...todo, completed: !todo.completed } : todo
                  )
                }

        default:
            return state
    }
}

export default reducer