
import React/* , { useRef }  */from "react";
import '../styles/CreateTodoButtom.css'

function CreateTodoButtom(props){
  const onClickButton=(msg)=>{
    alert(msg);};

  /* const todoTaskRef = useRef();

  const handleTodoAdd = () => {
    const text = todoTaskRef.current.value;
    if (text === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, {text, completed: false}]
    })
  } */
  
	return(

     <button
          className="CreateTodoButton"
         /*  onClick={handleTodoAdd} */
          onClick={() => onClickButton('Aquí se debería abrir el modal')}
        >
          +
        </button> 
	);
}

export { CreateTodoButtom }