import React, { Component } from 'react'

import TaskList from './TaskList'
import TaskForm from './TaskForm'

class ToDoView extends Component {

    state = {
        tasks: []
    };

    addTask = (taskContent, isImportant, isDone) => {
        if (taskContent === '') {
            throw new Error('Task content cannot be empty');
        }
        this.setState({
            tasks: this.state.tasks.concat({
                id: this.state.tasks.map(
                    task => task.id
                ).reduce(
                    (biggest, next) => Math.max(biggest, next),
                    0
                ) + 1,
                content: taskContent,

            })
        });
    };

    componentWillMount() {
        this.setState({
            tasks: JSON.parse(localStorage.getItem('tasks')) || []
        })
    }

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    deleteTasks = (taskIds) => {
        this.setState({
            tasks: this.state.tasks.filter(
                task => !taskIds.includes(task.id)
            )
        })
    };


    handleDeleteClick = event => {
        console.log(event.target.dataset.taskId);
        this.setState({
            tasks: this.state.tasks.filter(
                task => task.id !== parseInt(event.target.dataset.taskId, 10)
            )
        })
    };

    handleToggleClick = (event, attrName) => {
        const taskId = parseInt(event.target.dataset.taskId, 10);
        this.setState({
            tasks: this.state.tasks.map(
                task => task.id !== taskId ? task : {
                    ...task,
                    [attrName]: !task[attrName]
                }
            )
        })
    };


    render() {
        return (
            <div>
                <h1>ToDo</h1>

                <TaskForm
                    addTask={this.addTask}
                />

                <TaskList
                    tasks={this.state.tasks}
                    deleteTasks={this.deleteTasks}
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>
        )
    }
}

export default ToDoView