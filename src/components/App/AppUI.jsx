import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/index';
import { TodoItem } from '../TodoItem/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { useContext } from 'react';

export function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    eliminarTodo,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch  />
      <TodoList>

        {error && <p>Desesperate, estamos cargando</p>}
        {loading && <p>Estamos cargando, NO te desesperes...</p>}
        {(!loading && !searchedTodos.length ) && <p>No tienes tareas con esa letra!</p>}

        {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => eliminarTodo(todo.text)}
        />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}