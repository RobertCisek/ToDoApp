import React, { Component } from 'react'

class TaskForm extends Component {
    state = {
        taskInputValue: '',

        formError: null
    };

    handleChange = (event) => {
        this.setState({
            taskInputValue: event.target.value
        })
    };


    handleSubmit = (event) => {
        event.preventDefault();
        try {
            this.props.addTask(
                this.state.taskInputValue,

            );
            this.setState({
                formError: null
            })
        } catch (error) {
            this.setState({
                formError: error
            })
        }
        this.setState({
            taskInputValue: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {
                    this.state.formError && <p>{this.state.formError.message}</p>
                }
                <input
                    value={this.state.taskInputValue}
                    onChange={this.handleChange}
                />
                <button>Add task</button>
            </form>
        )
    }
}

export default TaskForm