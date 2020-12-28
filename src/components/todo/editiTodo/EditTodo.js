import React from 'react'
import {
    TextField,
    IconButton,
    Button, Grid
} from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import TodoContext from '../../../context/todoContext/TodoContext'


function EditTodo() {

    const todoContext = React.useContext(TodoContext)

    const {
        editTodo,
        cancelEdit,
        updateTodo
    } = todoContext;

    const [editInput, setEditInput] = React.useState(editTodo.todo)
    const handleChange = e => setEditInput(e.target.value)

    const update = () => {
        if (editInput) {
            let task = {
                todo: editInput,
                createdOn: editTodo.createdOn,
                key: editTodo.key
            }
            updateTodo(task)
        }
    }

    return (
            <div style = {{ width: 'inherit' }}>
            <Grid Grid container alignItems = 'center' style={{width:'450px'}}>
                <Grid item sm={ 8 } md={ 8 } lg={ 8 } xs={ 8 } xl={ 8 }>
                    <TextField 
                        id="taskTitle" 
                        // label="Enter Task Title" 
                        // fullWidth={true}
                        size='medium'
                        margin='normal'
                        variant = 'outlined'
                        value={ editInput }
                        required
                        onChange={handleChange}
                    />
                            <IconButton aria-label="" size="small">
                                < CancelIcon fontSize = "inherit"
                                onClick = {
                                    cancelEdit
                                }
                                />
                            </IconButton>
                </Grid>
                <Grid item>
                    <Button
                        onClick={update} 
                        variant='outlined' 
                        color='primary'
                    >
                        Update
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default EditTodo
