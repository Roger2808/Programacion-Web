export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: "center", color: "#777" }}>No hay tareas</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />

            <span
              className={`task-text ${task.completed ? "completed" : ""}`}
              onClick={() => onToggle(task.id)}
            >
              {task.name}
            </span>
          </div>

          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}
