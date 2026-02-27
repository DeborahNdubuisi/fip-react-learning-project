function TaskItem({ task, toggleTask }) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleTask(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
    </div>
  );
}

export default TaskItem;