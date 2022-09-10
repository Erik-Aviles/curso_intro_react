import React from "react";
import '../styles/TodoItem.css'

function TodoItem(props){

    const OnComplete = () => {
        alert ('Ya completaste toda las tareas de: ' + props.text);
    };
    const OnDelete = () => {
        alert ('Has borrado el todo de: ' + props.text);
    };

    return(
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={OnComplete}
            >
            🗸
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>

            <span 
            className="Icon Icon-delete"
            onClick={OnDelete}
            >
            🗑️
            </span>
        </li>
    );
}

export { TodoItem };