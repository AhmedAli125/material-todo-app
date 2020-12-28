import React from 'react'
import Header from '../header/Header'
import Input from '../input/Input'
import TodoList from './todoList/TodoList'
import TodoState from '../../context/todoContext/TodoState'

const TodoApplication = () => {
    return (
        <div>
            <TodoState>
                <Header />
                <Input />
                <TodoList />
            </TodoState>
        </div>
    )
}

export default TodoApplication
