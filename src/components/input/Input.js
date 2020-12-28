import React, {useState} from 'react'
import {TextField, Button} from '@material-ui/core'
import TodoContext from '../../context/todoContext/TodoContext'

const Input = () => {
    const todoContext = React.useContext(TodoContext)

    const [input, setInput] = useState('');
    const changeInput = e => setInput(e.target.value);
    let error = false;

    const createTodo = () => {
        if (input) {
            todoContext.addTodo(input)
            setInput('')
        } else {
            alert('Please Enter a Todo')
        }
    }


    return (
        <div>
            <TextField 
                id="taskTitle" 
                label="Enter Task Title" 
                fullWidth={true}
                size='medium'
                margin='normal'
                variant = 'outlined'
                value={ input }
                required
                onChange={changeInput}
            />
            <Button
                variant = 'contained'
                size='large'
                color='primary'
                fullWidth={ true }
                onClick={createTodo}
            >
                Add Task
            </Button>
        </div>
    )
}

export default Input
