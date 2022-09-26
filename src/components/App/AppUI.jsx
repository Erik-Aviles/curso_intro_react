import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { TodoFormulario } from '../TodoFormulario';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal';

export function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    eliminarTodo,
    openModal, 
    setOpenModal,
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
     
      {!!openModal && (
        <Modal>
          <TodoFormulario />
        </Modal>
      )}
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}