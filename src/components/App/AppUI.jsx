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
import { ErrorSkeleton } from '../LoandingSketeton/ErrorSkeleton';
import { EmptySkeleton } from '../LoandingSketeton/EmptySkeleton';
import { LoadingSkeleton } from '../LoandingSketeton/LoadingSkeleton';


// ESTE ES EL INICIO DEL CAMBIO

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

        {error && <ErrorSkeleton error={error} />}
{/*         {loading && <LoadingSkeleton />} */}
        {loading && new Array(5).fill(1).map((a, i) => <LoadingSkeleton key={i} />)}
        {(!loading && !searchedTodos.length ) && <EmptySkeleton />}

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