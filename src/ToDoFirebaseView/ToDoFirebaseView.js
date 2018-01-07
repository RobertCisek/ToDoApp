import React, { Component } from 'react'

import AddTaskForm from './AddTaskForm'
import TaskList from "./TaskList";

class ToDoFirebaseView extends Component {
    render() {
        return (
            <div>
                <h1>ToDo Firebase</h1>

                <AddTaskForm/>
                <TaskList/>

            </div>
        )
    }
}

export default ToDoFirebaseView