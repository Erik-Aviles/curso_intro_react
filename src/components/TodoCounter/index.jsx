import React from "react";
import './TodoCounter.css';

// Desestructuramos los props que pasamos al componente
export function TodoCounter({ total, completed }) {

  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} Tareas</h2>
  );
}
  
