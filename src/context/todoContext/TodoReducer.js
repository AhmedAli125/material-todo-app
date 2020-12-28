import {
    GET_TODOS,
    EDIT_TODO,
    CANCEL_EDIT
} from '../Type'

export default (state, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case EDIT_TODO:
            return {
                ...state,
                editTodo: action.payload
            }
        case CANCEL_EDIT:
            return {
                ...state,
                editTodo: null
            }
        default:
            return state
    }
}