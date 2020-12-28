import React from 'react'
import Todo from './todo/Todo'
import TodoContext from '../../../context/todoContext/TodoContext'
import './todoList.css'
import { CircularProgress, Typography} from '@material-ui/core'
import EditTodo from '../editiTodo/EditTodo'

function TodoList() {
    const todoContext = React.useContext(TodoContext)

    const {
        getTodos,
        todos
    } = todoContext;

    React.useEffect(() => {
        getTodos()
    }, [])

    let todoList = [];

    if (todos) {
        Object.keys(todos).forEach(key => todoList.push(todos[key]))
    }

    const [flag, setFlag] = React.useState(true);

    setTimeout(() => {
        setFlag(false)
    }, 5000)
    
    return (
        <div className='container'>
            { flag ? <CircularProgress
                thickness='1'
                size='10rem'
                style={ {
                    margin : '1rem 9rem'
                }}
            /> : null }

            {
                todoList.map(todo => <Todo task={ todo } key={ todo.key }/>)
            }

            {
                !todos ? <Typography variant='h4' align='center'>
                    No Todos Found!
                </Typography> : null 
            }
            
        </div>
    )
}

export default TodoList
