import React, { Component } from 'react'

class TaskList extends Component {
    state = {
        checkedTaskIds: []
    };

    componentWillMount() {
        this.setState({
            checkedTaskIds: JSON.parse(localStorage.getItem('checkedTaskIds')) || []
        })
    }

    componentDidUpdate() {
        localStorage.setItem('checkedTaskIds', JSON.stringify(this.state.checkedTaskIds))
    }

    handleCheckboxChange = (event) => {
        const taskId = parseInt(event.target.dataset.taskId, 10);

        const taskIsChecked = this.state.checkedTaskIds.find(
            item => item === taskId
        ) !== undefined;

        const checkedTaskIds = this.state.checkedTaskIds.filter(
            item => item !== taskId
        );

        this.setState({
            checkedTaskIds: taskIsChecked ? checkedTaskIds : this.state.checkedTaskIds.concat(taskId)
        })
    };

    handleSelectAllClick = () => {
        this.setState({
            checkedTaskIds: this.props.tasks.map(task => task.id)
        })
    };

    handleDeselectAllClick = () => {
        this.setState({
            checkedTaskIds: []
        })
    };

    handleDeleteSelected = () => {
        this.props.deleteTasks(this.state.checkedTaskIds)
    };


    render() {
        console.log('RENDER');
        return (
            <div>
                <button
                    onClick={this.handleSelectAllClick}
                >
                    Select all
                </button>

                <button
                    onClick={this.handleDeselectAllClick}
                >
                    Deselect all
                </button>

                <button
                    onClick={this.handleDeleteSelected}
                >
                    Delete selected
                </button>


                <ol>
                    {
                        this.props.tasks.map(
                            task => (
                                <li key={task.id}>
                                    <input
                                        data-task-id={task.id}
                                        type="checkbox"
                                        onChange={this.handleCheckboxChange}
                                        checked={this.state.checkedTaskIds.includes(task.id)}
                                    />
                                    {
                                        task.isDone === true ? '*' : null
                                    }
                                    {
                                        task.isImportant === true ? '!' : null
                                    }
                                    {task.content}

                                    <button
                                        data-task-id={task.id}
                                        onClick={this.props.handleDeleteClick}
                                    >
                                        delete
                                    </button>


                                </li>
                            )
                        )
                    }
                </ol>
            </div>
        )
    }
}

export default TaskList