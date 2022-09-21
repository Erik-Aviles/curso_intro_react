
import React/* , { useRef }  */from "react";
import './CreateTodoButtom.css'

function CreateTodoButton(props){
  const onClickButton = (msg) => {
    alert(msg);
  };
  
	return(
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('Aquí se debería abrir el modal')}
    >
      +
    </button> 
	);
}

export { CreateTodoButton }