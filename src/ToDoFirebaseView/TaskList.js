import React, { Component } from 'react'
import firebase from 'firebase'

class TaskList extends Component {

    state = {
        tasks: []
    };

    componentDidMount() {
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref('/dump/' + uid).on(
            'value',
            snapshot => {
                const snapshotValue = snapshot.val();
                const tasks = Object.entries(snapshotValue || {}).map(
                    ([id, value]) => ({ id, ...value })
                );

                this.setState({
                    tasks
                })
            }
        )
    }

    handleRemoveClick = event => {
        const taskId = event.target.dataset.taskId;
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref('/dump/' + uid + '/' + taskId).remove()
    };



    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <ul>
                    {
                        this.state.tasks.map(
                            task => (
                                <li key={task.id}>
                                    {
                                        task.isDone ?
                                            <del>
                                                {task.title}
                                            </del> :
                                            task.title
                                    }

                                    <button
                                        data-task-id={task.id}
                                        onClick={this.handleRemoveClick}
                                    >
                                        remove
                                    </button>


                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default TaskList