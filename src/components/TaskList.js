import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  state = {
    tasks: [
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Build Project", completed: false },
    ],
  };

  componentDidMount() {
    console.log("TaskList component mounted");
  }

  toggleTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      ),
    });
  };

  render() {
    return (
      <>
        {this.state.tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={this.toggleTask}
          />
        ))}
      </>
    );
  }
}

export default TaskList;