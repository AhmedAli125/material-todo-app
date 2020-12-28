import { useReducer } from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'
import Firebase from '../../config/Firebase'
import {
    GET_TODOS,
    EDIT_TODO,
    CANCEL_EDIT
} from '../Type'

const TodoState = props => {
    const initialState = {
        todos: null,
        // editTodo: false,
        editTodo: null
    }

    const [state, dispatch] = useReducer(TodoReducer, initialState)

    const getTodos = () => {
        Firebase.database().ref('/todo-application/todos').on('value', data => {
                dispatch({type: GET_TODOS, payload: data.val()})
        })
        // catch (err=> console.log(err))
    }

     const currentDate = () => {

         let now = new Date();

         let getMonth = () => {
             let month = now.getMonth() + 1;
             if (month < 10) {
                 return "0" + month.toString();
             } else return month.toString();
         };

         let getDate = () => {
             let current = (now.getDate());
             if (current < 10) {
                 return "0" + current.toString();
                 // return current.toString();
             } else return current.toString();
         };

         let getYear = () => {
             let year = (now.getFullYear()).toString();
             if (year < 10) {
                 return "0" + year.toString();
             } else return year.toString();
         };

        //  return getYear() + "-" + getMonth() + "-" + getDate();
         return getDate() + "-" + getMonth() + "-" + getYear();
     };

    const addTodo = (todo) => {
        const createdOn = currentDate();
        const key = Firebase.database().ref('/todo-application/todos/').push().key

        let todoTask = {
            key,
            createdOn,
            todo
        }

        Firebase.database().ref(`/todo-application/todos/${key}`).set(todoTask)
            .then(()=>console.log('todo added successfully'))
            .catch(err=>console.log(err))
    }

    const deleteTodo = (key) => {
        Firebase.database().ref(`/todo-application/todos/${key}`).remove()
            .then(()=>console.log('removed successfully'))
            .catch(err=>console.log(err))
    }

    const setUpdateTodo = (key) => {
        dispatch({ type: EDIT_TODO, payload: state.todos[key] })
    }

    const updateTodo = (task) => {
        console.log(task)

        Firebase.database().ref(`/todo-application/todos/${task.key}`).set(task)
            .then(() => {
                console.log('updated')
                dispatch({type: CANCEL_EDIT})
            })
            .catch((err)=>console.log(err))
    }
    
    const cancelEdit = () => {
        dispatch({type: CANCEL_EDIT})
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                editTodo: state.editTodo,
                getTodos,
                addTodo,
                deleteTodo,
                updateTodo,
                setUpdateTodo,
                cancelEdit
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState;