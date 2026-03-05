import React, { Component } from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

const ListContainer = styled.div`
  width: 400px;
  margin: auto;
`;

class TaskList extends Component {
  state = {
    tasks: [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Practice Styled Components", completed: false },
      { id: 3, text: "Prepare Presentation", completed: false }
    ]
  };

  toggleTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    });
  };

  render() {
    return (
      <ListContainer>
        {this.state.tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={this.toggleTask}
          />
        ))}
      </ListContainer>
    );
  }
}

export default TaskList;