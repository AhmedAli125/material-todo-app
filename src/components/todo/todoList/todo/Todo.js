import React from 'react'
import './todo.css'
import { Paper, Grid, Typography, Button, ButtonGroup} from '@material-ui/core'
import TodoContext from '../../../../context/todoContext/TodoContext'
import EditTodo from '../../editiTodo/EditTodo'
import Modal from '../../../modal/ModalWindow'
const Todo = ({ task }) => {

    const todoContext = React.useContext(TodoContext)

    const {
        deleteTodo,
        setUpdateTodo,
        editTodo
    } = todoContext;

    const deleteSelectedTodo = () => {
        deleteTodo(task.key)
    }

    const editSelectedTodo = () => {
        setUpdateTodo(task.key)
    }


    return (
        <Paper 
        elevation='2'
        className='paper'
        >
        {editTodo && <Modal>
            <EditTodo />
        </Modal>}
            <Grid container alignItems = 'center' key={task.key}>
                {                    
                    <Grid item sm={ 7 } md={ 7 } lg={ 7 } xs={ 7 } xl={ 7 }>
                        <Typography alignItems='center' variant='h6' style={{
                            marginTop: '10px',
                            marginLeft: '5px',
                            padding:'5px'
                        }}>
                            {task.todo}
                        </Typography>
                        <Typography variant='subtitle2' style={{marginLeft:'1rem'}}>
                            Created On: {task.createdOn}
                        </Typography>
                    </Grid>
                }
                    <Grid item>
                    <ButtonGroup>
                        <Button
                            onClick={editSelectedTodo} 
                            variant='outlined' 
                            color='primary'
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={deleteSelectedTodo} 
                            variant='outlined' 
                            color='secondary'
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                    </Grid>
            </Grid>
        </Paper>
    )
}

export default Todo
