import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "pending") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Gestor de Tareas</h1>

      <TaskForm onAdd={addTask} />

      <div className="filters">
        <button 
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Todas
        </button>
        <button 
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pendientes
        </button>
        <button 
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completadas
        </button>
      </div>

      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}
