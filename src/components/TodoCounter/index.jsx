import React from "react";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
import './TodoCounter.css';

// Desestructuramos los props que pasamos al componente
export function TodoCounter() {
  const {totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Tareas</h2>
  );
}
  
