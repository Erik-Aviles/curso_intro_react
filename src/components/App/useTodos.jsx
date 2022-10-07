import { useState} from "react";
import { useLocalStorage } from "./useLocalStorage"; 

 function useTodos(props) {
  const {
    item: todos, 
    saveItem: saveTodos, 
    error,
    loading,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal ] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = text =>{
    const newTodos = [...todos];
    newTodos.unshift({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };
  const eliminarTodo = text =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  return {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      eliminarTodo,
      openModal, 
      setOpenModal,
  };
}

export { useTodos };