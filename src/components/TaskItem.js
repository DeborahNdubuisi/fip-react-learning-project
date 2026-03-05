import React from "react";
import styled from "styled-components";

const Task = styled.div`
  background: #f4f4f4;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

function TaskItem({ task, toggleTask }) {
  return (
    <Task>
      <span>{task.text}</span>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
    </Task>
  );
}

export default TaskItem;