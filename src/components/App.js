import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButtom.js";

const todos = [
  {text: 'Aprender ingles intermedio', completed: true},
  {text: 'Aprender mas sobre css', completed: false},
  {text: 'Aprender lenguajes de progracion ', completed: false},
  {text: 'Aprender git y github', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
        ))}
      </TodoList>
      
      <CreateTodoButtom />      
    </React.Fragment>
  );
}

  export default App;